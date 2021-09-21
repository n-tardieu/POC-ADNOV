import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-buying-property',
  templateUrl: './buying-property.component.html',
  styleUrls: ['./buying-property.component.scss']
})
export class BuyingPropertyComponent implements OnInit {

  // latest snapshot
  public webcamImage: WebcamImage = null;

  constructor() { }

  ngOnInit(): void {
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
