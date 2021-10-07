import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Property: Array<any> = [
    {
      Id: 1,
      Name: 'Vila House',
      Type: 'House',
      Price: 1000000,
    },
    {
      Id: 2,
      Name: 'Zanigaba House',
      Type: 'House',
      Price: 2000000,
    },
    {
      Id: 3,
      Name: 'Hayat Vila House',
      Type: 'House',
      Price: 3000000,
    },
    {
      Id: 4,
      Name: 'Agoza Vila House',
      Type: 'House',
      Price: 4000000,
    },
    {
      Id: 5,
      Name: 'Jacros Vila House',
      Type: 'House',
      Price: 5000000,
    },
    {
      Id: 6,
      Name: 'Alsam Vila House',
      Type: 'House',
      Price: 6000000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
