import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuerySingleUserComponent } from './components/query-single-user/query-single-user.component';
import { QuerySingleUserComponentModule } from './components/query-single-user/query-single-user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RoleServiceModule } from './services/role.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-single-user', component: QuerySingleUserComponent }]), QuerySingleUserComponentModule, UserServiceModule, RoleServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
