import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocumentModel } from '../models/document-model';
import { CollectionService } from '../../../core/services/collections.service';
import { CollectionFilter } from '../../../core/models/collection-filter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  imports: [CommonModule],
})
export class DocumentListComponent implements OnInit {
  public documents!: DocumentModel[];
  collectionName = 'Documents';
  private projectId!: string;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params['project-id'];
      this.getDocuments();
    });
  }

  getDocuments() {
    this.collectionService
      .getCollection<DocumentModel>(
        this.collectionName,
        this.getCollectionFilters()
      )
      .subscribe({
        next: (response) => {
          this.documents = response;
        },
        error: (error) => {
          console.error('Error fetching data', error);
        },
      });
  }

  getCollectionFilters() {
    return [
      {
        name: 'projectid',
        value: this.projectId,
      },
    ] as CollectionFilter[];
  }
}
