import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzRadioModule,
    NzGridModule,
    NzLayoutModule,
    NzDropDownModule,
    NzEmptyModule,
    NzTabsModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzPopconfirmModule,
  ],
})
export class NgZorroAndtModule {}
