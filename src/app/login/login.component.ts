import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data ="Happy Banking with us...."
pdata="Enter Account Number"
acno:string =""
psw:string=""

login(a:any , b:any) {
  this.acno=a.value
  this.psw=b.value
  console.log(this.acno);
  console.log(this.psw);
  
  
}

acnoChange(event:any){
  this.acno=(event.target.value);
  console.log(this.acno);
  
}
passChange(event:any){
  console.log(event.target.value);
}
}
