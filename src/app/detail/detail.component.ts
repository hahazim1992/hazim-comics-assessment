import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  character: any = [];
  //loading: boolean = true;
  bid: number = 1475;
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //this.getDetail(this.bid);
    //this.getCharacter();
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.characterService.getDetail(params.get('id')!))
    );
  }

/*    getDetail(id: any){
    this.characterService.getDetail(id).subscribe((data: Character[]) => {
      this.character = data['results' as any ];
      //this.loading = false;
      console.log(this.character)
    })
  }  */

/*   getCharacter(){
    this.characterService.getCharacter().subscribe((data: Character[]) => {
      this.character = data['results' as any ];
      //this.loading = false;
      console.log(this.character)
    })
  } */

}
