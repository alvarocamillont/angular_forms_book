import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormsExampleComponent } from './template-forms-example.component';

const routes: Routes = [
  { path: '', component: TemplateFormsExampleComponent }
];

@NgModule({
  declarations: [TemplateFormsExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplateFormsExampleModule { }
