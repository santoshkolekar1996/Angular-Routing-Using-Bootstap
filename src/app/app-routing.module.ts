import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
    },
    {
      path: 'userdetails',
      component: UserdetailsComponent
      },
      {
        path: 'connect',
        component: ConnectComponent
      }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
