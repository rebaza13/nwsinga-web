import { Contacts } from '@capacitor-community/contacts';
import type { Contact } from 'src/stores/contactStore';
import type { ContactPayload } from '@capacitor-community/contacts';

export interface DeviceContact {
  contactId: string;
  displayName: string;
  phoneNumbers: {
    label: string;
    number: string;
  }[];
  emails?: {
    label: string;
    address: string;
  }[];
}

export interface ContactsPermissionState {
  granted: boolean;
}

export class ContactsService {
  /**
   * Check if the app has permission to access contacts
   * @returns Promise with the current permission state
   */
  static async checkPermissions(): Promise<ContactsPermissionState> {
    try {
      const permissionStatus = await Contacts.checkPermissions();
      return { granted: permissionStatus.contacts === 'granted' };
    } catch (error) {
      console.error('Error checking contacts permissions:', error);
      return { granted: false };
    }
  }

  /**
   * Request permission to access contacts
   * @returns Promise with the new permission state
   */
  static async requestPermissions(): Promise<ContactsPermissionState> {
    try {
      const permissionStatus = await Contacts.requestPermissions();
      return { granted: permissionStatus.contacts === 'granted' };
    } catch (error) {
      console.error('Error requesting contacts permissions:', error);
      return { granted: false };
    }
  }

  /**
   * Get all contacts from the device
   * @returns Promise with an array of device contacts
   */
  static async getDeviceContacts(): Promise<DeviceContact[]> {
    try {
      // First check for permissions
      const permissionStatus = await this.checkPermissions();
      
      if (!permissionStatus.granted) {
        // If not granted, request permissions
        const newPermissionStatus = await this.requestPermissions();
        if (!newPermissionStatus.granted) {
          throw new Error('Permission to access contacts was denied');
        }
      }

      // Get all contacts
      const result = await Contacts.getContacts({
        projection: {
          name: true,
          phones: true,
          emails: true
        }
      });

      // Convert the contact payload to our DeviceContact type
      return result.contacts.map(contact => {
        // Extract name from contact
        let displayName = 'Unknown';
        if (typeof contact.name === 'object' && contact.name !== null) {
          displayName = contact.name.display || contact.name.given || contact.name.family || 'Unknown';
        }

        // Extract phone numbers
        const phoneNumbers: { label: string; number: string }[] = [];
        if (Array.isArray(contact.phones)) {
          contact.phones.forEach(phone => {
            if (phone && typeof phone.number === 'string') {
              phoneNumbers.push({
                label: phone.label || phone.type || 'Other',
                number: phone.number
              });
            }
          });
        }

        // Extract emails
        const emails: { label: string; address: string }[] = [];
        if (Array.isArray(contact.emails)) {
          contact.emails.forEach(email => {
            if (email && typeof email.address === 'string') {
              emails.push({
                label: email.label || email.type || 'Other',
                address: email.address
              });
            }
          });
        }

        return {
          contactId: contact.contactId,
          displayName,
          phoneNumbers,
          emails
        };
      });
    } catch (error) {
      console.error('Error getting device contacts:', error);
      throw error;
    }
  }

  /**
   * Convert a device contact to our app contact format
   * @param deviceContact The device contact to convert
   * @returns The formatted app contact
   */
  static convertDeviceContactToAppContact(deviceContact: DeviceContact): Omit<Contact, 'id'> {
    // Get the primary phone number or the first one
    const primaryPhone = deviceContact.phoneNumbers && deviceContact.phoneNumbers.length > 0
      ? deviceContact.phoneNumbers[0].number
      : '';

    // Get the primary email or the first one
    const primaryEmail = deviceContact.emails && deviceContact.emails.length > 0
      ? deviceContact.emails[0].address
      : undefined;

    // Create notes if there are multiple phone numbers or emails
    let notes = '';
    
    if (deviceContact.phoneNumbers && deviceContact.phoneNumbers.length > 1) {
      notes += 'Additional phone numbers:\n';
      deviceContact.phoneNumbers.slice(1).forEach(phone => {
        notes += `${phone.label || 'Phone'}: ${phone.number}\n`;
      });
    }
    
    if (deviceContact.emails && deviceContact.emails.length > 1) {
      notes += 'Additional emails:\n';
      deviceContact.emails.slice(1).forEach(email => {
        notes += `${email.label || 'Email'}: ${email.address}\n`;
      });
    }

    return {
      name: deviceContact.displayName || 'Unknown',
      phoneNumber: primaryPhone,
      email: primaryEmail,
      notes: notes.trim() || undefined,
      favorite: false
    };
  }
}