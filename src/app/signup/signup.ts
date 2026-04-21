
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {

  form!: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  signup() {
    if (this.form.invalid) return;

    const { password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.router.navigate(['/login']);
  }
}