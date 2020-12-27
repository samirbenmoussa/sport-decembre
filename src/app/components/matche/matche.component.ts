import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
@Input () m : any ; 
  constructor() { }

  ngOnInit() {
  }

}
