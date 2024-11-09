import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationsComponent} from "../housing-locations/housing-locations.component";
import {HousingLocation} from '../housing-location';
import {HousingService} from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-locations *ngFor="let housingLocation of housingLocationList"
                             [housingLocation]="housingLocation"></app-housing-locations>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
