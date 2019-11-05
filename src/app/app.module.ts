import { NgModule } from '@angular/core'; 
import { BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CKEditorModule } from 'ng2-ckeditor';
// import { DocumentsComponent } from './documents/documents.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { PreviewComponent } from './preview/preview.component';
import { SafePipe } from './preview/safe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CKEditorModule, AppRoutingModule,RouterModule],
  declarations: [ AppComponent, CreateDocumentComponent, PreviewComponent, SafePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
