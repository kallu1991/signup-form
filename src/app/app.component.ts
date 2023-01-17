import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'signup';
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength]],
      lastName: ['', [Validators.required, Validators.minLength]],
      email: ['', [Validators.required, Validators.minLength]],
      password: ['', [Validators.required, Validators.minLength]],
    });
  }

  ngOnInit(): void {};

  onSubmit(){
    console.log(this.signupForm.value);
    
  }
}
