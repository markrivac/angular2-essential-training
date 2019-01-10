import {NgModule} from '@angular/core'; //use decorators
import {BrowserModule} from '@angular/platform-browser'; //to work with a browser we need this, which have pipes, components, and directives we need
import {AppComponent} from './app.component'// we need a starting component
@NgModule({
  imports:[
    BrowserModule 
  ], //bring another angular modules
  declarations:[
    AppComponent //need to add component to our module
  ], //make directives, pipes and components available to modules that don't come from another module
  bootstrap:[
    AppComponent // need to add component to the bootstrap property
  ] // used for a root module, tells angular which components will be the starting point for the bootstrap process (entry point for app code)
})
export class AppModule{}