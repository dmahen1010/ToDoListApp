import { Component, OnInit, Inject } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {DialogData} from '../list/list.component';
import {Item} from '../item';
import {ItemListService} from '../services/item-list.service';


@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private itemService: ItemListService) {}

  /*
 * Button click handler to simply close the dialog modal without saving.
 */
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  /*
   * Button click handler for creating a new Itme based on user input.
   */
  ok(title: string, desc: string) {
    this.itemService.addItem(new Item(title, desc));
    this.dialogRef.close();
  }

}
