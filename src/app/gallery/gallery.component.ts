import { Component, OnChanges } from '@angular/core';
import { ImagesService } from '../images/services/images.services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent {
  title = '';
  imagesCollection: any[] =[];

  constructor(private imagesService: ImagesService){
    this.imagesCollection = this.imagesService.getImages();
  }
} 

