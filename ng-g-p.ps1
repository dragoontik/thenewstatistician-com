$pageName = Read-Host "Name the page "
ng generate component pages/$pageName --skip-tests true --style none --module app
