AIUtil.SetContext Browser("creationtime:=0")

 Browser("creationtime:=0").Maximize
wait 10

AIUtil("profile").Click
AIUtil("input", "Username").Type "rsercely"
AIUtil.FindTextBlock("Password").Click
AIUtil("input", "Password").Type "1qaz@WSX"
AIUtil.FindTextBlock("SIGN IN").Click
'AIUtil("profile").Click
AIUtil.FindTextBlock("rsercely").Click

AIUtil.FindTextBlock("Sign out").Click

