import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { CollectionFilter } from '../../../core/models/collection-filter';
import { CollectionService } from '../../../core/services/collections.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule],
})
export class UserListComponent implements OnInit {
  public users!: UserModel[];
  collectionName = 'Users';
  private projectId!: string;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params['project-id'];
      this.getUsers();
    });
  }

  getUsers() {
    this.collectionService
      .getCollection<UserModel>(
        this.collectionName,
        this.getCollectionFilters()
      )
      .subscribe({
        next: (response) => {
          this.users = response;
        },
        error: (error) => {
          console.error('Error fetching data', error);
        },
      });
  }

  getCollectionFilters() {
    return [] as CollectionFilter[];
  }
}
