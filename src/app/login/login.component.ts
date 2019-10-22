import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { AutoDialService } from '../autoDialer.service';
//import { MyAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  payload={};
  animal: string;
  name: string;
    loginData = {
      email: null ,
      password: null 
    };
    loginFalse = false;
    Role ;
    UserName;
    constructor(private toastrService: ToastrService, private snackBar: MatSnackBar, public dialog: MatDialog, public router: Router,   private service: AutoDialService) {}
    
    ngOnInit() {}

    login() {

      if(this.loginData.email !== null && this.loginData.password!== null && this.loginData.email !== undefined && this.loginData.password!== undefined
        && this.loginData.email !== '' && this.loginData.password!== ''){

        this.service.login(this.loginData).subscribe((data)=>{
          console.log(data);
          if(data.success == true){
            localStorage.setItem('token', data.apiKey);
            localStorage.setItem('role', data.user.users.role);
            localStorage.setItem('username', `${data.user.users.firstName} ${data.user.users.lastName}`);
            this.Role = data.user.users.role;
            this.UserName = data.user.users.firstName +' '+data.user.users.lastName;
            this.service.setUserName(this.UserName); 
            this.showToaster();
          if(this.Role === 1){
            
            this.router.navigate(["/admin/"]);
          }else if( this.Role === 2){
           
            this.router.navigate(["/manager/"]);
          }else if(this.Role === 3){
            if(data['user']['users']){
              localStorage.setItem('PlivoUserId',data['user']['users']['plivoagentusername']);
              localStorage.setItem('PlivoPassword',data['user']['users']['plivoagentPassword']);
            }          
            this.router.navigate(["/agent"]);
          }
          }
          else if(data.success == false){
          //  alert('sth went wrong');
          this.payload = {
            message: 'Login Error',
            error: data.error.errors[0].message
          }
          this.openDialog(this.payload );
          this.loginData = {
            email: null ,
            password: null 
          };
          }
         
      });
      }
      else{
      //  alert('else fill pass or email');
        this.loginFalse = true;
      }
        
    }

    openDialog(payload): void {
      console.log(payload);
      const dialogRef = this.dialog.open(MyDialogComponent, {
        width: '550px',
        data: { message: payload.message,error: payload.error },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });

    }


  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['warning']
    });
  }

  //notification
   showToaster(){
     this.toastrService.success('Login Successful');
   }
   ErrorSuccess(){
     this.toastrService.error('Login Failed');
   }
   infoSuccess(){
     this.toastrService.info('info msg','Info!');
   }
   warningSuccess(){
     this.toastrService.warning('this is warning');
   }
}

