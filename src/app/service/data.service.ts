import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
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


   ];

   return {matches};

  }
}