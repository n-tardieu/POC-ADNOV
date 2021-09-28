import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  widgetClick = false

  constructor() { }

  ngOnInit(): void {
  }

  switchClick() {
    this.widgetClick = !this.widgetClick
  }
}
