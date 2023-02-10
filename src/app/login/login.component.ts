import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(private router: Router,private toastr: ToastrService){}

  Username = ''
  ngOnInit(){
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  submitLogin(){
    console.log(this.loginForm.value.userName)
    if(this.loginForm.valid){
      this.router.navigateByUrl('/dashboard');
      this.Username = this.loginForm.value.userName
      this.toastr.success(`Mr,${this.Username} Welcome`);
      this.loginForm.reset()
    }else{
      this.toastr.warning(`Mr,${this.Username} Your credentials are wrong`)
    }
  }
}
