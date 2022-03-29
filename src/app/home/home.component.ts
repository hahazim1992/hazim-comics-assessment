import { Character } from './../model/character';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  character: Character[] = [];
  characters: any = [];
  //test: any[] = [];
  constructor(
    private characterService: CharacterService
  ) { }

  test = [
    {
      'name': 'dina',
      'age': 24
    },
    {
      'name': 'hazim',
      'age': 30
    }
  ]

  ngOnInit(): void {
    this.getCharacter();
    console.log(this.test);
  }

  getCharacter(){
    this.characterService.getCharacter().subscribe((data: Character[]) => {
      this.character = data;
      console.log(this.character, typeof this.character);
    })
  }
}
