import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuerySingleUserComponent } from './components/query-single-user/query-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryMultiUserComponent } from './components/query-multi-user/query-multi-user.component';
import { QuerySingleUserComponentModule } from './components/query-single-user/query-single-user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { JobServiceModule } from './services/job.service-module';
import { QueryMultiUserComponentModule } from './components/query-multi-user/query-multi-user.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-single-user', component: QuerySingleUserComponent }, { path: 'query-single-job', component: QueryArraySingleJobComponent }, { path: 'query-multi-user', component: QueryMultiUserComponent }]), QuerySingleUserComponentModule, UserServiceModule, QueryArraySingleJobComponentModule, JobServiceModule, QueryMultiUserComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
