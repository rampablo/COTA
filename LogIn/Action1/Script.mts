﻿
InvokeApplication "P:\cotat_svaix028\cota.bat"


Dialog("PULIST.EXE").WinButton("Cancel").Click
Dialog("Rul148q").WaitProperty "enabled", true, 30
Dialog("Rul148q").WinButton("&No").Click @@ hightlight id_;_2231252_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Bienvenido").Move 338,154 @@ hightlight id_;_1182440_;_script infofile_;_ZIP::ssf6.xml_;_
'Window("Bienvenido").Check CheckPoint("Bienvenido_3")
Window("Bienvenido").WinEditor("Usuario:").Check CheckPoint("Usuario:") @@ hightlight id_;_2296788_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Bienvenido").WinEditor("Usuario:").SetCaretPos 0,0 @@ hightlight id_;_2296788_;_script infofile_;_ZIP::ssf7.xml_;_
'USUARIO
Window("Bienvenido").WinEditor("Usuario:").Type DataTable("Usuario", dtLocalSheet)
Window("Bienvenido").WinEditor("Usuario:").Type  micTab
Window("Bienvenido").WinEdit("Password:").Check CheckPoint("Password:") @@ hightlight id_;_1572932_;_script infofile_;_ZIP::ssf10.xml_;_
'PASS
Window("Bienvenido").WinEdit("Password:").SetSecure DataTable("Pass", dtLocalSheet) @@ hightlight id_;_1572932_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Bienvenido").CaptureBitmap "C:\Automatización\COTA\Capturas\Login.png", True
Reporter.ReportEvent micPass, "LogIn", "Funcionó", "C:\Automatización\COTA\Capturas\Login.png"
Window("Bienvenido").WinButton("Con&firmar").Click @@ hightlight id_;_1248178_;_script infofile_;_ZIP::ssf12.xml_;_
