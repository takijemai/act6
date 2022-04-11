import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GeolocationService } from '../../services/geolocation.service';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  photo: SafeResourceUrl;
  geolocation: Promise<any>;
  latitude: number;
  longitude: number;
  accuracy: number;
  data: any[]=[];
  constructor(private sanitizer: DomSanitizer, private geolocationservice: GeolocationService) {
    this.geolocation = this.geolocationservice.getLocation();
    this.geolocation.then(res=>{
      this.data = res;
      this.latitude = res.latitude;
      this.longitude = res.longitude;
      this.accuracy = res.accuracy;
    });
  }

  ngOnInit() {
  }

async takePicture() {
  const image = await Camera.getPhoto({
  quality: 100,
  allowEditing: false,
  resultType: CameraResultType.Uri
  });
this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image &&
(image.webPath));
  }




}
