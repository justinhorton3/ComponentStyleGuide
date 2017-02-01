# ComponentStyleGuide

## Custom Install For This project

Run `ng new ComponentStyleGuide --style=sass --routing` to generate the base app with SCSS.

Run `npm install ng2-bootstrap --save` to load in the ng2-boostrap componet libary.

Run `npm install bootstrap-sass --save` to load in the getBootstap base components.

Run `ng serve` to start server and verify the build.

Excute comand `ctrl + c` to stop server.


## Build out component structure 

Run `ng g module ui --routing` 

Run `ng g module ui/accordion --routing` 

Run `ng g module ui/alerts --routing` 

Run `ng g module ui/buttons --routing` 

Run `ng g module ui/carousel --routing` 

Run `ng g module ui/datepicker --routing` 

Run `ng g module ui/dropdowns --routing` 

Run `ng g module ui/modals --routing` 

Run `ng g module ui/dropdowns --routing` 

Run `ng g module ui/pagination --routing`  

Run `ng g module ui/progressbar --routing` 

Run `ng g module ui/tootip --routing` 


##Configure Routing Modules
1. *-routing.module to include the componets for routing. 

2. Lazy load all child routes by loading the child module with loadChildren
    `{ path: 'ui', loadChildren: 'app/ui/ui.module#UiModule' }`

3. Configure each parent route with a router outlet
    `<router-outlet></router-outlet>`
    
4. More information on routing can be found at https://angular.io/docs/ts/latest/guide/router.html 
















## Useful Angular CLI Comands

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit testsng

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).








