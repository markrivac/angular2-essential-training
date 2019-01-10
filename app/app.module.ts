import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Import all new components we want to add to the app
import { MediaItemComponent } from './media-item.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}