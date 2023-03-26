import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs'; // Add this import statement

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;
  subscription!: Subscription; // Add this property

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.subscription = this.http.post('http://localhost:3000/contact', this.formData)
      .subscribe(
        response => {
          console.log('Message sent successfully');
          this.submitted = true;
        },
        error => {
          console.error('Error sending message:', error);
        }
      );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
