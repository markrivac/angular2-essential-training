// Code to bootstrap the module, app up and running 
// We are using a browser so we need the bootstrap for that platform

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; //Returns a platform dynamic object that has a bootsrap module function model on it
import { AppModule } from './app.module';

// Function to bootstrap route module on the platform
platformBrowserDynamic().bootstrapModule(AppModule);