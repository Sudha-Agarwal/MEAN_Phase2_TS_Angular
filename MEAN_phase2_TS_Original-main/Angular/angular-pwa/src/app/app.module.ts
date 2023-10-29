import { NgModule, isDevMode,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebNotificationService } from './services/web-notification.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotificationComponent } from './components/notification/notification.component';
import { TODOComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    TODOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WebNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
