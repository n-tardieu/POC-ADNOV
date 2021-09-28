import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyList = [
    { id: "1", name: "Appartement 2 pièces", location: "St Cyprien - 162 000€" },
    { id: "2", name: "Appartement 4 pièces", location: "Escalquens - 280 000€" },
    { id: "3", name: "Appartement 3 pièces", location: "Bourrassol - 188 000€" },
    { id: "4", name: "Appartement 5 pièces", location: "Balma - 320 000€" },
    { id: "5", name: "Appartement 1 pièces", location: "Rangueil - 139 000€" }
  ]
  archivedList = [
    { id: "1", name: "Appartement 2 pièces", location: "St Cyprien - 162 000€" },
    { id: "2", name: "Appartement 4 pièces", location: "Escalquens - 280 000€" },
    { id: "3", name: "Appartement 3 pièces", location: "Bourrassol - 188 000€" },
    { id: "4", name: "Appartement 5 pièces", location: "Balma - 320 000€" },
    { id: "5", name: "Appartement 1 pièces", location: "Rangueil - 139 000€" },
    { id: "6", name: "Appartement 3 pièces", location: "Bourrassol - 188 000€" },
    { id: "7", name: "Appartement 5 pièces", location: "Balma - 320 000€" },
    { id: "8", name: "Appartement 1 pièces", location: "Rangueil - 139 000€" }
  ]

}
