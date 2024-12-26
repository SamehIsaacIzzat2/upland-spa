import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CollectionFilter } from '../models/collection-filter';

@Injectable({
  providedIn: 'root',
})
export class CollectionService extends BaseService {
  constructor(http: HttpClient) {
    super(http, ''); // Pass BaseService to the parent constructor
  }

  getCollection<Collection>(
    collectionName: string,
    filters: CollectionFilter[] = []
  ) {
    return this.get<Collection[]>(
      collectionName,
      undefined,
      this.generateFilterParam(filters)
    );
  }

  generateFilterParam(filters: CollectionFilter[]) {
    var filtersParam = filters
      .map((filter) => `${filter.name}_${filter.value}`)
      .join(',');

    return new HttpParams().set('filter', filtersParam);
  }
}
