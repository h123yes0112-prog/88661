# PowerShell script to save the generated image
$source = "C:\Users\user\.gemini\antigravity\brain\5d1cab87-efae-4bd0-8cb8-cb0dc080ce37\seniors_exercise_park_1777178476034.png"
$dest = "g:\我的雲端硬碟\Antigarvity\一頁網站\images\seniors_park.png"
Copy-Item -Path $source -Destination $dest -Force
Write-Host "Image saved to $dest"
