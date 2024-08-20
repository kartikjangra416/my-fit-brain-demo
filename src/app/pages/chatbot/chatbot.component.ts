import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isChatOpen = false;
  userMessage = '';
  messages: { text: string, sender: string }[] = [
    { text: 'Hi, I am Chatbot. How can I help you?', sender: 'bot' }
  ];

  toggleChat(event: Event) {
    event.stopPropagation(); // Prevent event propagation
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, sender: 'user' });
      this.handleBotResponse(this.userMessage);
      this.userMessage = '';
    }
  }

  handleBotResponse(userMessage: string) {
    let botResponse = '';

    switch (userMessage.toLowerCase()) {
      case 'hi':
      case 'hello':
        botResponse = 'Hello! How can I assist you today?';
        break;
      case 'what is your name?':
        botResponse = 'I am Chatbot, your virtual assistant.';
        break;
      case 'how can i contact support?':
        botResponse = 'You can contact support by visiting our support page.';
        break;
      default:
        botResponse = 'For more information, visit https://example.com';
    }

    this.messages.push({ text: botResponse, sender: 'bot' });
  }
}
