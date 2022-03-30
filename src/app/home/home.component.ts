import { Character } from './../model/character';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { Router } from '@angular/router';
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
  selectedName: any;
  suggestionName: any = [];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.characterService.getCharacter().subscribe((data: Character[]) => {
      this.character = data['results' as any ];
      this.loading = false;
    })
  }

  search(event: any){
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.character.length; i++) {
      let char = this.character[i];
      if(char.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(char);
      }
    }
    this.suggestionName = filtered;
    console.log(query, this.selectedName);
  }

  viewDetails(id: any){
    this.router.navigate(['/details'])
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
