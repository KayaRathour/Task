import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SeriesComponentComponent } from './series-component/series-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsTaskComponent } from './forms-task/forms-task.component';
import { MutiTaskComponent } from './muti-task/muti-task.component';
import { Dynamic1Component } from './muti-task/dynamic1/dynamic1.component';
import { Dynamic2Component } from './muti-task/dynamic2/dynamic2.component';
import { Dynamic3Component } from './muti-task/dynamic3/dynamic3.component';
import { Dynamic4Component } from './muti-task/dynamic4/dynamic4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    SeriesComponentComponent,
    FormsTaskComponent,
    MutiTaskComponent,
    Dynamic1Component,
    Dynamic2Component,
    Dynamic3Component,
    Dynamic4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
