@echo off
echo ===================================
echo        NWSinga App Builder        
echo ===================================
echo Building Android application...

:: Install chalk dependency if not already installed
call npm list chalk || npm install chalk --save-dev

:: Run the improved build script
node build-android.js

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
