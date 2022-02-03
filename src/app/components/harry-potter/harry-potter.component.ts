import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from 'src/app/services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {

  datos$: any;

  constructor(
    private harryPotterService: HarryPotterService
  ) { }

  ngOnInit(): void {
    this.getDatosHarryPotter('Gryffindor');
  }

  getDatosHarryPotter(arg:any) {
    this.datos$ = this.harryPotterService.getDataHarryPotter(arg);
  }
//Slytherin Hufflepuff Ravenclaw Gryffindor
}
