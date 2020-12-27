import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
matches:any;

  constructor() { }

  ngOnInit() {
    this.matches = [
     {id:1, teamOne : 'FCB', teamTwo : 'RMD' , 
    scoreOne: '1' , scoreTwo : '3', 
    logoOne : 'assets/images/logo_1.png',
    logoTwo : 'assets/images/logo_2.png'}, 

    {id:1, teamOne : 'juv', teamTwo : 'atm' , 
    scoreOne: '5' , scoreTwo : '5', 
    logoOne : 'assets/images/logo_1.png',
    logoTwo : 'assets/images/logo_2.png'}, 

    {id:1, teamOne : 'aaa', teamTwo : 'bd' , 
    scoreOne: '12' , scoreTwo : '35', 
    logoOne : 'assets/images/logo_1.png',
    logoTwo : 'assets/images/logo_2.png'}, 


    ]
  }

}
