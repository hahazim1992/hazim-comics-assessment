import { Character } from './../model/character';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://comicvine.gamespot.com/api';
  private apiKey = 'd200ee796aa111e1e0bd87723eb4c7cf7d80cff5';
  //private apiUrl2 = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private http: HttpClient
  ) { }
  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(`api/characters/?api_key=${this.apiKey}&format=json&sort=date_last_updated:desc`)
    //return this.http.get<Character[]>(this.apiUrl2);

  }
}
