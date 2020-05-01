# Angular api call using HttpClientModule
Angular call api to get data &amp; display corona details on page

## Run project
ng serve to run a project, default is http://localhost:4200/

## Command
* create a new app : *ng new project-name*
* new component : *ng g c component-name*
* new modules : *ng g m modules-name*
* new services : *ng g s services-name*
* Bootstrap ng add @ng-bootstrap/schematics - for reference [Angular Bootstrap](https://ng-bootstrap.github.io/#/getting-started)

## Note
1. Redirect home url to /corona from src/app/app-routing.module.ts file you can change based on requirements.
2. Its taking base url from src/environments/environment.ts for dev environment. On production it takes url from src/environments/environment.prod.ts.
3. If url is incorrect so it will go to the notfound component to display common not found page. that is also handled in src/app/app-routing.module.ts file.


## Deployment
Below command will create dist folder inside your project. For dev it will take baseurl from environment.ts file & for prod environment.prod.ts.
* Dev environment : *ng b*
* Prod environment : *ng b --prod*

## Project Screenshot
![Screenshot]https://github.com/sundaramj/corona-api-angular/blob/master/project-screeshot.jpg)