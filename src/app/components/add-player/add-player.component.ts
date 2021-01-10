import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  players: any = {};

  addplayerform!: FormGroup 
constructor(private formBuilder:FormBuilder,
  private router: Router,
    private playerService: PlayerService) { }

ngOnInit() : void {
  this.addplayerform = this.formBuilder.group ({
    PlayerName: ['', [Validators.minLength(5), Validators.required]],
    NumPlayer: ['',[ Validators.required]],
    PostePlayer: ['',[ Validators.required]],
    TeamPlayer: ['',[ Validators.required]]
  })
}
addPlayer() {
  // alert ('btn cliked')
  
    this.playerService.addPlayer(this.players).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }


}
