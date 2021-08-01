import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WordcountPipe } from './wordcount.pipe';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { TextDirective } from './text.directive';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    PipesDemoComponent,
    WordcountPipe,
    DirectiveDemoComponent,
    TextDirective,
    DataBindingOneComponent,
    DataBindingTwoComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ServiceDemoComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
