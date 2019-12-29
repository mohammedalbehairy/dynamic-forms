import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transportation-create-or-edit',
  templateUrl: './transportation-create-or-edit.component.html',
  styleUrls: ['./transportation-create-or-edit.component.css']
})
export class TransportationCreateOrEditComponent implements OnInit {

  transportationForm: FormGroup;
  citiesArr = [
    'Dammam	',
    'Jeddah',
    'Khaybar',
    'Mecca',
    'Medina',
    'Riyadh',
    'Tabuk',
  ]

  transportationTypesArr = [
    'Domestic',
    'international'
  ]

  busTypesArr = [
    'Type 1',
    'Type 2',
    'Type 3',
    'Type 4',
    'Type 5',
  ]

  packagesTransportationArr = [
    {
      transType: 1,
      busTypes: 1,
      departureCity: 1,
      arrivalCity: 1
    },
    {
      transType: 0,
      busTypes: 0,
      departureCity: 0,
      arrivalCity: 0
    },
    {
      transType: 1,
      busTypes: 0,
      departureCity: 3,
      arrivalCity: 4
    },
    {
      transType: 0,
      busTypes: 1,
      departureCity: 2,
      arrivalCity: 1
    },
  ]

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.transportationForm = this.fb.group({
      packageTransportation: this.fb.array([this.createPkTrans()])
    });

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      let id = +params.get('id');
      if (id) {
        this.editTransForm(id);
      }

    })
  }


  createPkTrans() {
    return this.fb.group({
      transType: new FormControl('', Validators.required),
      busTypes: new FormControl('', Validators.required),
      departureCity: new FormControl('', Validators.required),
      arrivalCity: new FormControl('', Validators.required),
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



  editTransForm(id: number) {
    (this.transportationForm.get('packageTransportation') as FormArray).removeAt(0);

    this.packagesTransportationArr.forEach(element => {
      (this.transportationForm.get('packageTransportation') as FormArray).push(this.fb.group({
        transType: element.transType,
        busTypes: element.busTypes,
        departureCity: element.departureCity,
        arrivalCity: element.arrivalCity,
      }));
    });
  }
}
