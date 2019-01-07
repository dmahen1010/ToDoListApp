import { Component, OnInit } from '@angular/core';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {MatDialog} from '@angular/material';
import {ItemListService} from '../services/item-list.service';
import {Item} from '../item';
import {EditModalDialogComponent} from '../edit-modal-dialog/edit-modal-dialog.component';

export interface DialogData {
  index: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Item[];
  title: string;
  description: string;

  constructor(public dialog: MatDialog, private itemService: ItemListService) { }

  ngOnInit() {
    this.getAllItems();
  }

  /*
   * Button click handler for opening dialog modal to create a new Item object and add it to the array.
   */
  openDialog(pTitle: string, pDesc: string): void {
    this.title = pTitle;
    this.description = pDesc;
    this.dialog.open(ModalDialogComponent, {
      width: '750px',
      data: {title: this.title, description: this.description}
    });
  }

  /*
   * Function subscribes to changes in the itemList array.
   */
  getAllItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  /*
   * Button click handler for opening dialog modal to edit an existing Item object in the array.
   */
  editItem(index: number): void {
    this.title = this.itemService.getItemTitle(index);
    this.description = this.itemService.getItemDescription(index);
    this.dialog.open(EditModalDialogComponent, {
      width: '750px',
      data: {index: index, title: this.title, description: this.description}
    });
  }

  /*
   * Button click handler for deleting an Item object from the array based on which index was clicked.
   */
  deleteItem(index: number): void {
    this.itemService.removeItem(index);
  }

}
