import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collections.service';
import { ActivatedRoute } from '@angular/router';
import { SeparatorModel } from '../models/separator-model';
import { CollectionFilter } from '../../../core/models/collection-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-separator-list',
  templateUrl: './separator-list.component.html',
  styleUrls: ['./separator-list.component.css'],
  imports: [CommonModule],
})
export class SeparatorListComponent implements OnInit {
  public separators!: SeparatorModel[];
  collectionName = 'Separators';
  private projectId!: string;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params['project-id'];
      this.getSeparators();
    });
  }

  getSeparators() {
    this.collectionService
      .getCollection<SeparatorModel>(
        this.collectionName,
        this.getCollectionFilters()
      )
      .subscribe({
        next: (response) => {
          this.separators = response;
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
