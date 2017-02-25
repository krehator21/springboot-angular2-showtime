import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { Fileupload1Component } from './fileupload1/fileupload1.component';
import { Fileupload2Component } from './fileupload2/fileupload2.component';
import { Fileupload3Component } from './fileupload3/fileupload3.component';
import { Fileupload5Component } from './fileupload5/fileupload5.component';




const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'hello', component: HelloComponent},
    {path: 'fileupload', component: FileuploadComponent},
    {path: 'fileupload1', component: Fileupload1Component},
    {path: 'fileupload2', component: Fileupload2Component},
    {path: 'fileupload3', component: Fileupload3Component},
    // {path: 'fileupload4', component: Fileupload4Component},
    {path: 'fileupload5', component: Fileupload5Component},


];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
