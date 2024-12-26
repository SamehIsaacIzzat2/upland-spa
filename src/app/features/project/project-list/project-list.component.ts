import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project-model';
import { CommonModule } from '@angular/common';
import { CollectionService } from '../../../core/services/collections.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  imports: [CommonModule, RouterLink],
})
export class ProjectListComponent implements OnInit {
  public projects!: ProjectModel[];
  collectionName = 'Projects';

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.collectionService
      .getCollection<ProjectModel>(this.collectionName)
      .subscribe({
        next: (response) => {
          this.projects = response;
        },
        error: (error) => {
          console.error('Error fetching data', error);
        },
      });
  }
}
