import { Routes } from "@angular/router"
import { GalleryComponent } from "./app/gallery/gallery.component"
import { ImagesComponent } from "./app/images/images.component"

export const appRoutes:Routes = [
    { path: "image/:id", component: ImagesComponent },
    { path: "",  component: GalleryComponent} 
]