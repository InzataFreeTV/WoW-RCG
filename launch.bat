@echo off
cd /d "%~dp0"
echo Starting WoW RCG local server from %CD%

rem --- try npx/http-server only (no python) ---
where npx >nul 2>&1
if %ERRORLEVEL%==0 (
  echo Found npx — launching http-server on http://127.0.0.1:8000
  start "WoW RCG Server" cmd /k "npx http-server -p 8000 -a 127.0.0.1"
  goto :openbrowser
)

echo npx not found. Opening index.html directly (may fail for ES modules).
start "" "%~dp0index.html"
pause
exit /b

:openbrowser
timeout /t 1 >nul
start "" "http://127.0.0.1:8000"
echo Server launched. The server window will remain open so you can see logs/errors.
pause >nul
exit /b