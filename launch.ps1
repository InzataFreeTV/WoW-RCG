$base = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $base
Write-Host "Starting WoW RCG local server in $base"

if (Get-Command python -ErrorAction SilentlyContinue) {
  Start-Process -FilePath "cmd.exe" -ArgumentList "/c","start","cmd","/k","python -m http.server 8000"
}
elseif (Get-Command npx -ErrorAction SilentlyContinue) {
  Start-Process -FilePath "cmd.exe" -ArgumentList "/c","start","cmd","/k","npx http-server -p 8000"
}
else {
  Write-Host "No Python or npx found. Opening index.html directly."
  Start-Process "$base\index.html"
  exit
}

Start-Sleep -Milliseconds 800
Start-Process "http://localhost:8000"
Write-Host "Server started at http://localhost:8000"