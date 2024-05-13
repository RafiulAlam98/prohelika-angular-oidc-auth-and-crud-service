import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.scss',
})
export class ClientAddComponent {
  constructor(private http: HttpClient) {}
  message: boolean = false;

  addClient = new FormGroup({
    name: new FormControl(''),
    logo: new FormControl(''),
    url: new FormControl(''),
  });

  saveData(): void {
    this.http
      .post<any>('https://api.prohelika.com/api/client', this.addClient.value)
      .subscribe((data) => {
        console.log('data', data);
        if (data) {
          this.message = true;
          this.addClient.reset({});
        }
      });
  }

  closeAlert() {
    this.message = false;
  }
}