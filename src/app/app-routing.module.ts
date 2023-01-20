import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuerySingleUserComponent } from './components/query-single-user/query-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QuerySingleUserComponentModule } from './components/query-single-user/query-single-user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { JobServiceModule } from './services/job.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-single-user', component: QuerySingleUserComponent }, { path: 'query-single-job', component: QueryArraySingleJobComponent }]), QuerySingleUserComponentModule, UserServiceModule, QueryArraySingleJobComponentModule, JobServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
