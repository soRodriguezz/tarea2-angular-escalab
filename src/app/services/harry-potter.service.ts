import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  constructor(private _http: HttpClient) {}

  getDataHarryPotter( arg: any) {
    return this._http.get(`${environment.URL_HARRYPOTTER}/api/characters/house/${arg}`);
  }
  
}
