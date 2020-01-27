import { Component, OnInit } from '@angular/core';
import { Marker } from '../entities/Marker';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit {

  constructor() { }
  latitude: number;
  longitude: number;
  zoom: number;
  markers: Marker[];
  currentMarker: Marker;

  ngOnInit() {
    this.markers = [];
    this.setInit();
    this.setMarkers();
    console.log(this.markers[0])
  }

  // Get Current Location Coordinates
  private setInit() {
    this.latitude = 49.045639;
    this.longitude = 31.159608;
    this.zoom = 6;
  }

  private setMarkers() {
    this.markers
      .push({ lat: 49.150875, lng: 35.704503, address: "some", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { lat: 51.233786, lng: 29.072268, address: "HISTORY, PURPOSE AND USAGE", desc: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content." },
        { lat: 48.816019, lng: 28.340754, address: "HEDONIST ROOTS", desc: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”" },
        { lat: 50.289822, lng: 34.286719, address: "REMIXING A CLASSIC", desc: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book." });
  }

  selectMarker(marker: Marker) {
    this.currentMarker = marker
  }


}
