import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Docy } from "./docy";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  name = "ng2-ckeditor";
  ckeConfig: any;
  mycontent: string;
  log: string = "";
  toCreate:boolean=false;
  documents:Docy[]=[]
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private router:Router) {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    sessionStorage.setItem('documents',JSON.stringify(this.documents));
    
  }

  create(){
    this.toCreate=true;
    this.router.navigate(['createDocument'])
  }
}
