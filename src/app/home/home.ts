import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NavbarComponent]
})
export class HomeComponent {

  selectedFile: File | null = null;
  result: string = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) {
      alert('Please select a file first');
      return;
    }

  
    console.log('Uploading:', this.selectedFile);

    
    setTimeout(() => {
      this.result = `
Invoice Number: 12345
Total: $250
Date: 2025-01-01
Vendor: Amazon
      `;
    }, 1000);
  }
}