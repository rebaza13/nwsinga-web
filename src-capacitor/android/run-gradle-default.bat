@echo off
echo Running Gradle with default Java environment...

rem Use system's default Java without forcing a specific version
echo Using system default Java...
java -version

echo Running Gradle...
gradlew.bat %*

echo Build process completed.
exit /b %ERRORLEVEL%