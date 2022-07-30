import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  private map: L.Map;
  private centroid: L.LatLngExpression = [21.8, -79.5]; // Cuba 

  // ngOnInit() {
  // }

  private initMap(): void{

    this.map = L.map('map',{
      center: this.centroid,
      zoom: 8
    });

    const tiles = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=5xR2e0SqeoAA1o4nswSj',{
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
      crossOrigin: true
    });

    tiles.addTo(this.map);

  }

  ngOnInit(): void{
    this.initMap();
  }


}
