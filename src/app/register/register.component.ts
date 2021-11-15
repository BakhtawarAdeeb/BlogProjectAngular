import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  form: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder) { 

  }

  ngOnInit(): void {
  this.form = this.fb.group({
    username: ['',[Validators.required, Validators.minLength(5) ,Validators.pattern("[A-Za-z]+")] ],
    email: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
    password: ['',[ Validators.required, Validators.minLength(8)]]
      
  });
  }
  get username() { return this.form.get('username'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit(): void {
    const { username, email, password } = this.form.value;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}