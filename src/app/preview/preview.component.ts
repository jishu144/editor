import { Component, OnInit, ViewChild } from '@angular/core';
import { Docy } from '../docy';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  [x: string]: any;
  name = "ng2-ckeditor";
  ckeConfig: any;
  toDownload=false
  toBeReviewed:any;
  documents:Docy[]=[];
  st="<p>this is a test</p>"
  toEdit=false;
  fileName:string
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private router:Router) {
    
  }

  ngOnInit() {
      this.toBeReviewed=JSON.parse(sessionStorage.getItem('lastSaved'));
      this.ckeConfig = {
        allowedContent: false,
        extraPlugins: "divarea",
        forcePasteAsPlainText: true
      };
  }


  edit(){
    // this.documents=JSON.parse(sessionStorage.getItem('documents'));
    // this.documents.filter(
    //  (item)=>item.id=this.toBeReviewed.id
    // ).
    this.toEdit=true;
    // this.documents.forEach(element => {
    //   if(element.id==this.toBeReviewed.id){
    //     element.data=this.toBeReviewed.data;
    //   }
    // });

    // sessionStorage.setItem('documents',JSON.stringify(this.documents));
  }
 

  save(){
    this.toEdit=false;
    this.documents=JSON.parse(sessionStorage.getItem('documents')); 
    this.documents.forEach(element => {
      if(element.id==this.toBeReviewed.id){
        element.data=this.toBeReviewed.data;
      }
    });
    sessionStorage.setItem('documents',JSON.stringify(this.documents));
    
  }


  download() {
    this.toDownload=true;
  }

  downLoad2(data: any) {
    

    data='<!DOCTYPE html>'+data;
    const blob: Blob = new Blob([data], {type: 'text/btl'});
    const fileName: string = this.fileName+'.btl';
    const objectUrl: string = URL.createObjectURL(blob);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();        

    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);
  }
 

  view(){
    this.router.navigate(['documents'])
  }
}
