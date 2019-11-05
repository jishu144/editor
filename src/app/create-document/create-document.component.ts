import { Component, OnInit, ViewChild } from '@angular/core';
import { Docy } from '../docy';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  name = "ng2-ckeditor";
  ckeConfig: any;
  mycontent: string;
  log: string = "";
  documents:Docy[]=[];
  count=0;
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private router:Router) {
    this.mycontent ="";
  }

  

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: "divarea",
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
  save(){
     this.count+=1;
     let newDoc=new Docy;
     newDoc.id=this.count;
     newDoc.data=this.mycontent;
     console.log("the new data is:"+newDoc.data);
     
     this.documents=JSON.parse(sessionStorage.getItem('documents'));
     this.documents.push(newDoc);
    //  if(!this.documents)
    //  {this.documents=[];
    //    this.documents.push(newDoc);}
    //    else{
    //     this.documents.push(newDoc);
    //    }
     sessionStorage.setItem('documents',JSON.stringify(this.documents));
    //  this.localStorage.localStorage.setItem('lastSaved',JSON.stringify(newDoc));
    sessionStorage.setItem('lastSaved',JSON.stringify(newDoc));
     this.router.navigate(['preview'])
  }


}
