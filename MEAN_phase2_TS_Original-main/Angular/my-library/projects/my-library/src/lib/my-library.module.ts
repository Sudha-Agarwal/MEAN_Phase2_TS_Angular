import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { NewLibModule } from './new-lib/new-lib.module';

@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
   
  ],
  exports: [
    MyLibraryComponent
   
  ]
})
export class MyLibraryModule { }
