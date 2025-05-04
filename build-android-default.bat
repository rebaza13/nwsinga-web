@echo off
echo ===================================
echo        NWSinga App Builder        
echo ===================================
echo Building Android application with default Java...

cd src-capacitor\android

:: Run Gradle with default Java environment
call run-gradle-default.bat clean
call run-gradle-default.bat assembleDebug

:: Return to original directory
cd ..\..

:: Check if build was successful
if %ERRORLEVEL% EQU 0 (
  echo.
  echo ===================================
  echo Build completed successfully!
  echo The APK can be found in:
  echo src-capacitor\android\app\build\outputs\apk\debug
  echo ===================================
) else (
  echo.
  echo ===================================
  echo Build failed with error code: %ERRORLEVEL%
  echo Please check the logs above for details.
  echo ===================================
)

pause