import { Component, OnInit, Inject } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {DialogData} from '../list/list.component';
import {ItemListService} from '../services/item-list.service';

@Component({
  selector: 'app-edit-modal-dialog',
  templateUrl: './edit-modal-dialog.component.html',
  styleUrls: ['./edit-modal-dialog.component.css']
})
export class EditModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private itemService: ItemListService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  /*
   * Button click handler for updating the title and description for a specific item.
   */
  ok(title: string, desc: string) {
    this.itemService.updateItem(this.data.index, title, desc);
    this.dialogRef.close();
  }

}
