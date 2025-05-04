# Custom ProGuard rules to handle duplicate CapacitorWebView lambda classes

# Keep the first occurrence of the duplicate CapacitorWebView synthetic lambda class
-keep class com.getcapacitor.CapacitorWebView$$ExternalSyntheticLambda* { *; }

# Tell ProGuard to ignore duplicate class definition warnings for this specific class
-dontnote com.getcapacitor.CapacitorWebView$$ExternalSyntheticLambda*

# Force ProGuard to ignore duplicate class definitions for lambda classes
-dontwarn com.getcapacitor.CapacitorWebView$$*

# General rules for Capacitor
-keep class com.getcapacitor.** { *; }
-keep public class * extends com.getcapacitor.Plugin
-keep class org.apache.cordova.** { *; }

# Handle the synthetic lambda issue by allowing the first encountered definition
-keepclassmembers,allowobfuscation,allowoptimization class com.getcapacitor.CapacitorWebView {
    synthetic <methods>;
}