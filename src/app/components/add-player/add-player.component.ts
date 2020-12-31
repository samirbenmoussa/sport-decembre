import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  addplayerform!: FormGroup 
constructor(private formBuilder:FormBuilder) { }

ngOnInit() : void {
  this.addplayerform = this.formBuilder.group ({
    PlayerNamer: ['', [Validators.minLength(5), Validators.required]],
    NPlayer: ['',[ Validators.required]],
    PostePlayer: ['',[ Validators.required]],
    TeamPlayer: ['',[ Validators.required]]
  })
}
addPlayer() {
  alert ('btn cliked')
}

}
