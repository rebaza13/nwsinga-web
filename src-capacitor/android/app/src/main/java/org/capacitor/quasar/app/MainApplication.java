package org.capacitor.quasar.app;

import android.app.Application;
import androidx.multidex.MultiDexApplication;

public class MainApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        
        // Initialize the application with MultiDex support
        // This helps handle large method counts and duplicate classes
    }
}