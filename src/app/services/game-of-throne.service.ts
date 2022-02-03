import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameOfThroneService {

  constructor(private _http: HttpClient) {}

  getDataGameOfThrone() {
    return this._http.get(`${environment.URL_GAMEOFTHRONE}/api/v2/Characters`);
  }
}
