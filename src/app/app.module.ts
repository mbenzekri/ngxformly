import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { FormAppComponent } from './app.component';

@NgModule({
  declarations: [
    FormAppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot({    }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [FormAppComponent],
  exports: []
})

export class AppModule { }
