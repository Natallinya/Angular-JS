import { Injectable } from "@angular/core"

@Injectable()

export class ImagesService{
imagesCollection = [];
    getImages(){
    return this.imagesCollection = IMAGES.slice(0);
}
    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id==id)
    }


}

const IMAGES = [
    {"id": 1, title: "image1","path":"assets/img/1.jpg"},
    {"id": 2, title: "image2","path":"assets/img/2.jpg"},
    {"id": 3, title: "image3","path":"assets/img/3.jpg"},
    {"id": 4, title: "image4","path":"assets/img/4.jpg"},
    {"id": 5, title: "image5","path":"assets/img/5.jpg"},
    {"id": 6, title: "image6","path":"assets/img/6.jpg"},
    {"id": 7, title: "image7","path":"assets/img/7.jpg"},
    {"id": 8, title: "image8","path":"assets/img/8.jpg"},
]
