import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { QueryMultiUserComponent } from './query-multi-user.component';

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule, MatTableModule],
  declarations: [QueryMultiUserComponent],
  providers: [],
  exports: [QueryMultiUserComponent]
})
export class QueryMultiUserComponentModule {
}
