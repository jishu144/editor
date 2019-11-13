import { Component, OnInit } from '@angular/core';
import { Docy } from '../docy';
import { Router } from '@angular/router';
// import * as flexLayout from '@angular/flex-layout';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents:Docy[]=[];
  constructor(private router:Router) { }
  // public cols: number = 2;
  ngOnInit() {
    this.documents=JSON.parse(sessionStorage.getItem('documents'));
    // this.cols=1;
  }
  goBack(){
    this.router.navigate(['preview']);
  }

}