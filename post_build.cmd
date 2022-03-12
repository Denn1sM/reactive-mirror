xcopy  ".\build" "..\static" /E /H /C /I /Y
robocopy "..\static\static\css" "..\static\css" /MOVE /IS
robocopy "..\static\static\js" "..\static\js" /MOVE /IS
del /q "..\static\static"
rmdir "..\static\static"