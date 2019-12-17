import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-dynamic-forms';

  transportationForm: FormGroup;
  cities = [
    'Dammam	',
    'Jeddah',
    'Khaybar',
    'Mecca',
    'Medina',
    'Riyadh',
    'Tabuk',
  ]

  transportationTypes = [
    'Domestic',
    'international'
  ]

  busTypes = [
    'Type 1',
    'Type 2',
    'Type 3',
    'Type 4',
    'Type 5',
  ]

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.transportationForm = this.fb.group({
      packageTransportation: this.fb.array([this.createPkTrans()])
    });
  }


  createPkTrans() {
    return this.fb.group({
      transType: new FormControl({ value: '' }, Validators.required),
      busTypes: new FormControl({ value: '' }, Validators.required),
      departureCity: new FormControl({ value: '' }, Validators.required),
      arrivalCity: new FormControl({ value: '' }, Validators.required),
    })
  }

  addPkTrans() {
    const packageTransportations = this.transportationForm.get('packageTransportation') as FormArray;
    packageTransportations.push(this.createPkTrans())
  }

  deletePkTrans(i: number) {
    const packageTransportations = this.transportationForm.get('packageTransportation') as FormArray;
    packageTransportations.removeAt(i)
  }

  onTransSubmit() {
    console.log(this.transportationForm);
  }
}
