import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css']
})
export class EditAddComponent implements OnInit {
  match: any
  id: any
  click: any
  constructor(private matchService: MatchService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formbuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    });
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.matchService.getMatchById(this.id).subscribe(
        (data) => {
          this.match = data;
        }
      )
      this.click = 'Edit Match';
    } else {
      this.click = 'Add Match';
    }
  }
  editMatch() {
    // console.log('here my object', this.match)
    this.matchService.updateMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }
  addMatch() {
    // console.log('here my object', this.match)
    this.matchService.addMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }
  AddEditMatch() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')

    if (this.id == null) {
      this.addMatch();
    }
    else {
      this.editMatch();
    }
  }
}
