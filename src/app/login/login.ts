import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  form!: FormGroup; // ✅ تعريف واحد بس

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) return;

    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user) {
      alert('No account found');
      return;
    }

    if (
      user.email === this.form.value.email &&
      user.password === this.form.value.password
    ) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid email or password');
    }
  }
}