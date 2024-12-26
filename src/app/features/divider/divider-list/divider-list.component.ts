import { Component, OnInit } from '@angular/core';
import { DividerModel } from '../models/divider-model';
import { CollectionService } from '../../../core/services/collections.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionFilter } from '../../../core/models/collection-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divider-list',
  templateUrl: './divider-list.component.html',
  styleUrls: ['./divider-list.component.css'],
  imports: [CommonModule],
})
export class DividerListComponent implements OnInit {
  public dividers!: DividerModel[];
  collectionName = 'Dividers';
  private projectId!: string;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params['project-id'];
      this.getDividers();
    });
  }

  getDividers() {
    this.collectionService
      .getCollection<DividerModel>(
        this.collectionName,
        this.getCollectionFilters()
      )
      .subscribe({
        next: (response) => {
          this.dividers = response;
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
