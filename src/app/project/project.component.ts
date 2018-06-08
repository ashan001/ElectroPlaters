import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project-service/project.service';
import { IProject } from '../models/project-model/project';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'projects',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    providers: [HttpClient]
})

export class ProjectComponent implements OnInit {

   public projects: IProject[];
    errorMessage: string;

    constructor(public _projectService: ProjectService) { }

    ngOnInit(): void {
        this._projectService.getProjects()
            .subscribe(projects => {
                this.projects = projects;
            },
            error => this.errorMessage = <any>error);
    }
}