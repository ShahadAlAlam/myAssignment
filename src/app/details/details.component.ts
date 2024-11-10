import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HousingService} from '../services/housing.service';
import {HousingLocation} from '../housing-location';
import {FormsModule, FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"
           alt="Exterior photo of {{housingLocation?.name}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-locations">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section>
        <ul class="listing-features">
          <li>Available Units: {{ housingLocation?.availableUnits }}</li>
          <li>WIFI: {{ housingLocation?.wifi }}</li>
          <li>Laundry: {{ housingLocation?.laundry }}</li>
        </ul>
        <p class="listing-apply"></p>
      </section>
      <section class="listing-apply">
        <h2 class="listing-heading">Apply to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name:</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name:</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">email:</label>
          <input id="email" type="text" formControlName="email">
          <button class="primary" type="submit">Apply</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("")
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.getHousingLocationById(this.housingLocationId);
  }

  getHousingLocationById(id: number){
    this.housingService.getHousingLocationById(this.housingLocationId).then(housingLocation =>{
      this.housingLocation = housingLocation;
    });
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
      this.housingLocationId
    )
  }
}
