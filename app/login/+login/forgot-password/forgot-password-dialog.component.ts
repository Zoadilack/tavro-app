import { Component } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { AuthenticationService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
})
export class ForgotPasswordDialog {
  public loading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private alertService: AlertService,
    public snackBar: MdSnackBar,
    public dialog: MdDialog,
  ) {}

  public sendReset(username: string) {
    this.loading = true;
    this.authService.sendReset(username)
        .subscribe(response => { 
          this.snackBar.open(response.message, 'X', {duration:15000});
          this.dialog.closeAll();
          this.loading = false;
        },
        error => {
          this.snackBar.open(error.message, 'X', {duration:15000});
          this.loading = false;
        });    
  }

}