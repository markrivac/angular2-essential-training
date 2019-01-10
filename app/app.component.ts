// we need to add the component decorator to create a component
import {Component} from '@angular/core';

// we use component decorator
// we need to decorate a component with at minimun two metadata properties
@Component({
  selector: 'app', // Use to locate a custom html element and apply the component to
  template: '<h1> My App </h1>'
})
//we need to export a class for the component
export class AppComponent{}

