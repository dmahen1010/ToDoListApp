import { Injectable } from '@angular/core';
import { Item } from './../item';
import { Observable, of} from 'rxjs';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {


  private itemList: Item[] = [];
  private key = 'list';

  constructor(private httpService: HttpClientService) { }

  /*
   * Add an Item object to the list array.
   */
  addItem(anItem): void {
    this.itemList.push(anItem);
    localStorage.setItem(this.key, JSON.stringify(this.itemList));
    console.log('Calling httpService post');
    // TESTING: For BE API Testing
    // this.httpService.post('/', this.itemList);
    // this.httpService.get('/');
  }

  /*
   * Delete an Item object from the list array.
   */
  removeItem(index: number): boolean {
    if (index > -1) {
      this.itemList.splice(index, 1);
      localStorage.setItem(this.key, JSON.stringify(this.itemList));
      // TESTING: For BE API Testing
      // this.httpService.post('/', this.itemList);
      return true;
    } else {
      return false;
    }
  }

  /*
   * Update the data in an Item object in the list array.
   */
  updateItem(index: number, uTitle: string, uDesc: string): boolean {
    if (index > -1) {
      this.itemList[index].title = uTitle;
      this.itemList[index].description = uDesc;
      localStorage.setItem(this.key, JSON.stringify(this.itemList));
      // TESTING: For BE API Testing
      // this.httpService.post('/', this.itemList);
      return true;
  } else {
      return false;
    }
  }

  /*
   * Get the entire Item list array as an observable object for the template.
   */
  getItems(): Observable<Item[]> {

    if (localStorage.getItem(this.key)) {
      this.itemList = JSON.parse(localStorage.getItem(this.key));
      // TESTING: For BE API Testing
      // this.httpService.get('/');
    } else {
      localStorage.setItem(this.key, JSON.stringify(this.itemList));
    }
    return of(this.itemList);
  }

  /*
   * Get the title string for a specific Item object in the list array.
   */
  getItemTitle(index: number): string {
    return this.itemList[index].title;
  }

  /*
   * Get the description string for a specific Item object in the list array.
   */
  getItemDescription(index: number): string {
    return this.itemList[index].description;
  }
}
