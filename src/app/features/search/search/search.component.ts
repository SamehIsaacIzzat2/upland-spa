import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileSearchResult } from '../models/file-search-result';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SearchComponent implements OnInit {
  public fileResults!: FileSearchResult[];
  public groupedResults: { [key: string]: FileSearchResult[] } = {};
  public searchQuery: string = '';
  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  onSearch(query: string) {
    debugger;
    this.searchService.search(query).subscribe({
      next: (response) => {
        this.fileResults = response;
        this.aggregateProjects();
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  aggregateProjects() {
    this.groupedResults = this.fileResults.reduce((acc, file) => {
      if (!acc[file.projectName]) {
        acc[file.projectName] = [];
      }
      acc[file.projectName].push(file);
      return acc;
    }, {} as { [key: string]: FileSearchResult[] });
  }
}
