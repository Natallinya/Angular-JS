import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {
  image:any;
  constructor(private imagesService: ImagesService, private route: ActivatedRoute){}
    ngOnInit(){
      this.image = this.imagesService.getImage(
        +this.route.snapshot.params['id']
        )
    }

  }
