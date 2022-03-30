import { Character } from './../model/character';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../service/character.service';
//import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  character: any = [];
  //virtualCharacter: any = [];
  loading: boolean = true;

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
      this.loading = false;
    })
  }

  /* loadData(event: any){
    setTimeout(() => {
      if (this.character) {
        this.virtualCharacter = this.character.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 100); */

    /* applyFilterGlobal($event: any, stringval: any) {
      this.dv.filterGlobal(($event.target as HTMLInputElement).value, stringval); 
  }*/



}
