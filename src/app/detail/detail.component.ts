import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  character: any = [];
  bid: any;
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.bid = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetail(this.bid);
  }

   getDetail(id: any){
    this.characterService.getDetail(id).subscribe((data: Character[]) => {
      this.character = data['results' as any ];
      console.log(this.character)
    })
  }
}
