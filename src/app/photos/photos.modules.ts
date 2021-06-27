import { NgModule } from "@angular/core";
import { DarkenOnHoverDirective } from "../shared/directives/darken-on-hover/darken-on-hover.directive";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list-module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
   imports: [
     PhotoModule,
     PhotoListModule,
     PhotoFormModule,
     DarkenOnHoverDirective

   ]
})
export class PhotosModule {}
