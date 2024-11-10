import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationsComponent} from "../housing-locations/housing-locations.component";
import {HousingLocation} from '../housing-location';
import {HousingService} from '../services/housing-service/housing.service';
import {TopMenuComponent} from '../menu/top-menu/top-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationsComponent, TopMenuComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-locations *ngFor="let housingLocation of filteredLocationList"
                             [housingLocation]="housingLocation"></app-housing-locations>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = []

  constructor() {
    this.getAllHousingLocationList();
  }

  getAllHousingLocationList() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: String) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList
        .filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
    }
  }
}
