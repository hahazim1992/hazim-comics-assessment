import { Character } from './../model/character';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  character: any = [];
  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.characterService.getCharacter().subscribe((data: Character[]) => {
      this.character = data['results' as any ];
      console.log(this.character, typeof this.character);
    })
  }
}
