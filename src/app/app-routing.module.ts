import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { PreviewComponent } from './preview/preview.component';
// import { DocumentsComponent } from './documents/documents.component';

const appRoutes: Routes = [
  // {path:'', component:DocumentsComponent},
  // {path:'documents', component:DocumentsComponent},
    {path:'createDocument', component:CreateDocumentComponent},
    {path:'preview', component:PreviewComponent}
    
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
