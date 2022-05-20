import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: IHousingLocation[] = [];
  results: IHousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter <IHousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocation(searchText: string) {
    if (!searchText) return;
   this.results = this.locationList.filter(location=> location.city.toLowerCase().includes(searchText.toLowerCase()))
  }

  selectHousingLocation(location: IHousingLocation) {
    this.selectedLocationEvent.emit(location)
  }

}
