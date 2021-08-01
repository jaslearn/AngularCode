import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path:'component', component:MyCompComponent},
  {path:'Pipes', component:PipesDemoComponent},
  {path:'Directives', component:DirectiveDemoComponent},
  {path:'DataBinding1', component:DataBindingOneComponent},
  {path:'DataBinding2', component:DataBindingTwoComponent},
  {path:'TemplateForms', component:TemplateFormsComponent},
  {path:'ReactiveForms', component:ReactiveFormsComponent},
  {path:'ServiceDemo', component:ServiceDemoComponent},
  {path:'HttpClientDemo', component:HttpClientComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
