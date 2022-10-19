import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAndtModule } from './ng-zorro-antd/ng-zorro-andt.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [NavBarComponent, TableComponent],
  imports: [CommonModule, NgZorroAndtModule, FormsModule, ReactiveFormsModule],
  exports: [NgZorroAndtModule, NavBarComponent, TableComponent],
})
export class SharedModule {}
