import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { QuerySingleUserComponent } from './query-single-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [QuerySingleUserComponent],
  providers: [],
  exports: [QuerySingleUserComponent]
})
export class QuerySingleUserComponentModule {
}
