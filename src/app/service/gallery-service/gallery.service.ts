import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProject } from '../../models/project-model/project';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IGallery } from '../../models/Gallery/gallery.model';


@Injectable()
export class GalleryService {

    private _url: string = "/api/projects/gallery.json";
    constructor(private _http: HttpClient) { }

    getGallery():Observable<IGallery[]>{
        return this._http.get<IGallery[]>(this._url);        
    }
}