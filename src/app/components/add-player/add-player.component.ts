import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  players: any = {};

  addplayerform!: FormGroup 
constructor(private formBuilder:FormBuilder) { }

ngOnInit() : void {
  this.addplayerform = this.formBuilder.group ({
    PlayerName: ['', [Validators.minLength(5), Validators.required]],
    NumPlayer: ['',[ Validators.required]],
    PostePlayer: ['',[ Validators.required]],
    TeamPlayer: ['',[ Validators.required]]
  })
}
addPlayer() {
  alert ('btn cliked')
}

}
