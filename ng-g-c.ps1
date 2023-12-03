$componentName = Read-Host "Name the component "
ng generate component ui/$componentName --skip-tests true --style none --module app
