import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.userService.updateUserGuid('');
  }

  get f() {
    return this.loginForm.controls as { [key: string]: FormControl };
  }

  onSubmit(): void {
    this.submitted = true;

    console.log(this.loginForm.errors);
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.userService.updateUserGuid(response as string);

        console.log('LoggedIn successfully, guid: ', response);
        this.router.navigate(['/projects']);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
