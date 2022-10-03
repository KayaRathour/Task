import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsTaskComponent } from './forms-task/forms-task.component';
import { MutiTaskComponent } from './muti-task/muti-task.component';
import { SectionComponent } from './section/section.component';
import { SeriesComponentComponent } from './series-component/series-component.component';


const routes: Routes = [
    {path:'series-component',component:SeriesComponentComponent},
    {path:'forms-task',component:FormsTaskComponent},
    {path:'multi-task',component:MutiTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
