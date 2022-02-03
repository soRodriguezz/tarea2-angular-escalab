import { Component, OnInit } from '@angular/core';
import { GameOfThroneService } from 'src/app/services/game-of-throne.service';

@Component({
  selector: 'app-game-of-throne',
  templateUrl: './game-of-throne.component.html',
  styleUrls: ['./game-of-throne.component.css']
})
export class GameOfThroneComponent implements OnInit {

  datos$: any;

  constructor(
    private _gameOfThroneService: GameOfThroneService
  ) { }

  ngOnInit(): void {
    this.getDataGameOfThrone();
  }

  getDataGameOfThrone() {
    this.datos$ = this._gameOfThroneService.getDataGameOfThrone();
  }

}
