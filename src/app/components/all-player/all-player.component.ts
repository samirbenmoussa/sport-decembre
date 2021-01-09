import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-player',
  templateUrl: './all-player.component.html',
  styleUrls: ['./all-player.component.css']
})
export class AllPlayerComponent implements OnInit {
  players:any;
  

  constructor() { }

  ngOnInit() {
    this.players = [
     {id:1, PlayerName : 'Samir', NumPlayer : '55' , 
     PostePlayer: 'DEF' , TeamPlayer : 'BARCA'}, 

    {id:2, PlayerName : 'juv', NumPlayer : 'atm' , 
    PostePlayer: '5' , TeamPlayer : 'juv'}, 

    {id:3, PlayerName : 'aaa', NumPlayer : 'bd' , 
    PostePlayer: '12' , TeamPlayer : '35'}, 


    ]
  }

}
