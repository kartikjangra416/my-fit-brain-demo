import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { User } from './model/model';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, CommonModule,ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfitbrain';
  isLoginForm: boolean = true; // Default to Login Form

  loginObj: any = {
    "Email": "",
    "Password": ""
  };

  userObj: User = new User();

  @ViewChild('model') model: ElementRef | undefined;

 

  openPopup() {
    if (this.model) {
      this.model.nativeElement.style.display = 'block';
    }
  }

  closePopup() {
    if (this.model) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }



 

  logoff() {
    localStorage.removeItem('eventUser');
    this.userObj = new User();
  }
}
