import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PhotosModule } from "./photos/photos.modules";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
