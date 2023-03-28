import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {keypressFunctionWrapper} from "../operations.component";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {DashboardService, SearchObject} from "../../dashboard/dashboard.service";
import {MessageService} from "../../message.service";

@Component({
  selector: 'dialog-comp',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements  OnInit {
  @Output() resultToParent = new EventEmitter<boolean>();
  keypressFunctionWrapper = keypressFunctionWrapper;
  loading = false;
  formCtrl = {
    id: new UntypedFormControl('', [Validators.required,Validators.maxLength(12)]),
    name: new UntypedFormControl('')
  }
  form = new UntypedFormGroup(this.formCtrl);

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              private readonly messageService: MessageService,
              private readonly dashboardService: DashboardService){

  }

  ngOnInit() {
  }

  closeDialog(result: boolean) {
    if (!result) {
      this.dialogRef.close(null);
      return;
    }
    const searchObjectsBody: SearchObject = {
      id: this.form.value.id,
      name: this.form.value.name
    };
    this.dashboardService.postRequest(searchObjectsBody).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  disableNext(){
    return this.form.invalid;
  }

}
