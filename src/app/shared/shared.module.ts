import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAndtModule } from './ng-zorro-antd/ng-zorro-andt.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { TableCustomComponent } from './table-custom/table-custom.component';
import { TableUpdateDataComponent } from './table-update-data/table-update-data.component';
import { TableRetiroComponent } from './table-retiro/table-retiro.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    TableCustomComponent,
    TableUpdateDataComponent,
    TableRetiroComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAndtModule,
    FormsModule,
    ReactiveFormsModule,
    NzPaginationModule,
  ],
  exports: [
    NgZorroAndtModule,
    NavBarComponent,
    TableComponent,
    TableCustomComponent,
    TableUpdateDataComponent,
    TableRetiroComponent,
    NzPaginationModule,
  ],
})
export class SharedModule {}
