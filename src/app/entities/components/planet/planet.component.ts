import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../../pages/interfaces/responses';
import {Router} from '@angular/router';
import {DataService} from '../../../pages/services/data.service';
import {CommonModule, KeyValuePipe} from '@angular/common';
import {FormatJsonPipe} from '../../../shared/pipes/format-json.pipe';
import {checkArray} from '../../../shared/utils/checkArray';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    KeyValuePipe, CommonModule, FormatJsonPipe
  ],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit {

  public id: string;
  public planetData?: Planet;

  constructor(private _router : Router,private _dataService: DataService) {
    this.id = this._router.url.split('/').at(-1)!;
  }

  ngOnInit() {
    this._dataService.getPlanetsById(this.id).subscribe((res: Planet)=>{
      this.planetData = res;
      console.log(res)
    })
  }

  protected readonly checkArray = checkArray;

  public toString(value: any): string {
    return String(value);
  }
}
