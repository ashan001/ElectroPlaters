import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { GalleryService } from '../service/gallery-service/gallery.service';
import { IGallery } from '../models/Gallery/gallery.model';

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    providers: [HttpClient]
})

export class GalleryComponent implements OnInit {

    public Gallery: IGallery[];
    errorMessage: string;
    constructor(private _galleryService: GalleryService) { }

    ngOnInit(): void {
        this._galleryService.getGallery()
            .subscribe(gallery => {
                this.Gallery = gallery
            }, error => this.errorMessage)
    }
}