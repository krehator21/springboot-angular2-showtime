import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { routing, appRouterProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NgUploaderModule } from 'ngx-uploader';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { Fileupload1Component } from './fileupload1/fileupload1.component';
import { Fileupload2Component } from './fileupload2/fileupload2.component';
import { Fileupload3Component } from './fileupload3/fileupload3.component';
import { FileUploadModule } from "ng2-file-upload";
import { Fileupload5Component } from './fileupload5/fileupload5.component';

@NgModule({
    declarations: [AppComponent,
                   HelloComponent,
                   CalendarComponent,
                   HomeComponent,
        FileuploadComponent,
        Fileupload1Component,
        Fileupload2Component, Fileupload3Component, Fileupload5Component],
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              HttpModule,
              AlertModule.forRoot(),
              DatepickerModule.forRoot(),
              routing,
              NgUploaderModule, FileUploadModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
