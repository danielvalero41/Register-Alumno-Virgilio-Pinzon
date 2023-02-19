import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAndtModule } from './ng-zorro-antd/ng-zorro-andt.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { TableCustomComponent } from './table-custom/table-custom.component';
import { TableUpdateDataComponent } from './table-update-data/table-update-data.component';
import { TableRetiroComponent } from './table-retiro/table-retiro.component';

@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    TableCustomComponent,
    TableUpdateDataComponent,
    TableRetiroComponent,
  ],
  imports: [CommonModule, NgZorroAndtModule, FormsModule, ReactiveFormsModule],
  exports: [
    NgZorroAndtModule,
    NavBarComponent,
    TableComponent,
    TableCustomComponent,
    TableUpdateDataComponent,
    TableRetiroComponent,
  ],
})
export class SharedModule {}
