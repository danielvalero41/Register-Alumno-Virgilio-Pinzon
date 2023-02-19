import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AuthModule } from './auth/auth.module';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NzPaginationModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, DatePipe],
  bootstrap: [AppComponent],
  exports: [NzPaginationModule],
})
export class AppModule {}
