import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileSearchResult } from './models/file-search-result';
import { BaseService } from '../../core/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseService {
  constructor(http: HttpClient) {
    super(http, ''); // Pass BaseService to the parent constructor
  }

  search(query: string) {
    var param = new HttpParams().set('query', query);
    return this.get<FileSearchResult[]>('search', undefined, param);
  }
}
