import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor( private builder: FormBuilder, private toastr: ToastrService, private loginRegisterService: LoginRegisterService, private router: Router) {
    
  }

  public registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control(''),
    isActive: this.builder.control('', Validators.required)
  });

  public getRegistration () {
    if (this.registerForm.valid) {
      this.loginRegisterService.setRegistration(this.registerForm.value).subscribe( response =>{
        this.toastr.success('Registered successfully');
    })
    } else {
      this.toastr.warning('Please enter valid data')
    }
  }

}
