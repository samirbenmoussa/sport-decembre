import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';
import { MatcheComponent } from '../matche/matche.component';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  matches: any;

  constructor() { }

  ngOnInit() {
   
    }

}
