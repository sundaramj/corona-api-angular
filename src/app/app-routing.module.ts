import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'',redirectTo:'corona',pathMatch:'full'},
  {path:'corona',component:ApiComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
