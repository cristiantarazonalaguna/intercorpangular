import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InterComponent } from './pages/inter/inter.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
{path: 'inter' ,component: InterComponent},
{path: 'report',component: ReportComponent},
{path: '**' ,pathMatch:'full',component: InicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
