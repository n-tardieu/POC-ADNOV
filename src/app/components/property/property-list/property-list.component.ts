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

  propertyList = [{ id: "1", name: "Studio appartement", img: "apprt1.jpg" }, { id: "2", name: "Studio appartement", img: "apprt2.jpg" }, { id: "3", name: "Studio appartement", img: "apprt3.jpg" }, { id: "4", name: "Studio appartement", img: "apprt3.jpg" }, { id: "5", name: "Studio appartement", img: "apprt3.jpg" }]
  archivedList = [{ id: "4", name: "apprt1", img: "apprt1.jpg" }, { id: "5", name: "apprt1", img: "apprt2.jpg" }, { id: "6", name: "apprt1", img: "apprt3.jpg" }, { id: "4", name: "apprt1", img: "apprt1.jpg" }, { id: "5", name: "apprt1", img: "apprt2.jpg" }, { id: "6", name: "apprt1", img: "apprt3.jpg" }, { id: "4", name: "apprt1", img: "apprt1.jpg" }, { id: "5", name: "apprt1", img: "apprt2.jpg" }]

}
