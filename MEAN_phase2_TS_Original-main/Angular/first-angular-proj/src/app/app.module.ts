import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PipesComponent } from './pipes/pipes.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseChildComponent } from './course-child/course-child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductMobileDetailsComponent } from './product-mobile-details/product-mobile-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    PipesComponent,
    InputOutputComponent,
    ParentComponent,
    ChildComponent,
    CourseParentComponent,
    CourseChildComponent,
    ProductListComponent,
    ProductMobileListComponent,
    ProductLaptopListComponent,
    ProductMobileDetailsComponent,
    LoginFormComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
