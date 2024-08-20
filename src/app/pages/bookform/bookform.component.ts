import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookform',
  standalone: true,
  imports: [AsyncPipe, CommonModule, DatePipe, FormsModule],
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent {
  router = inject(Router);

  therapists: any[] = [];
  currentTherapistIndex: number = 0;
  currentTherapist: any = null; // Initialize with null
  userBookObj: any = {
    userName: '',
    contactNumber: '',
    emailId: ''
  };

  constructor() {
    // Dummy data for therapists with image URLs
    this.therapists = [
      { id: 1, name: 'Dr. John Doe', rating: '4.5', location: 'New York', languages: 'English, Spanish', fee: '$100', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 2, name: 'Dr. Jane Smith', rating: '4.8', location: 'Los Angeles', languages: 'English', fee: '$120', imageUrl: 'https://myfitbrain.in/images/doctors/doctor_1688543271.jpg' },
      { id: 3, name: 'Dr. Alice Brown', rating: '4.7', location: 'Chicago', languages: 'English', fee: '$90', imageUrl: 'https://myfitbrain.in/images/doctors/1389532405_joining.jpg' },
      { id: 4, name: 'Dr. Bob White', rating: '4.6', location: 'Houston', languages: 'English, French', fee: '$110', imageUrl: 'https://myfitbrain.in/images/doctors/isha-sokhal.jpg' },
      { id: 5, name: 'Dr. Michael Green', rating: '4.6', location: 'San Francisco', languages: 'English', fee: '$105', imageUrl: 'https://myfitbrain.in/images/doctors/766282403_joining.png' },
      { id: 6, name: 'Dr. Emily Harris', rating: '4.7', location: 'Seattle', languages: 'English', fee: '$115', imageUrl: 'https://myfitbrain.in/images/doctors/abhishek-chugh.jpg' },
      { id: 7, name: 'Dr. David Lee', rating: '4.5', location: 'Boston', languages: 'English, German', fee: '$95', imageUrl: 'https://myfitbrain.in/images/doctors/kanakadurga-kalidindi.jpg' },
      { id: 8, name: 'Dr. Sophia Martinez', rating: '4.8', location: 'Austin', languages: 'English, Spanish', fee: '$125', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 9, name: 'Dr. Daniel Wright', rating: '4.6', location: 'Denver', languages: 'English', fee: '$110', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 10, name: 'Dr. Olivia Young', rating: '4.7', location: 'Philadelphia', languages: 'English', fee: '$120', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 11, name: 'Dr. James Wilson', rating: '4.5', location: 'San Diego', languages: 'English, French', fee: '$100', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 12, name: 'Dr. Mia Thompson', rating: '4.8', location: 'Phoenix', languages: 'English, Italian', fee: '$130', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 13, name: 'Dr. William Brown', rating: '4.7', location: 'Dallas', languages: 'English', fee: '$105', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 14, name: 'Dr. Ava Johnson', rating: '4.6', location: 'San Jose', languages: 'English, Spanish', fee: '$115', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 15, name: 'Dr. Lucas Taylor', rating: '4.8', location: 'Jacksonville', languages: 'English', fee: '$125', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' },
      { id: 16, name: 'Dr. Isabella Lee', rating: '4.5', location: 'Indianapolis', languages: 'English, Chinese', fee: '$95', imageUrl: 'https://myfitbrain.in/images/doctors/dr-neha-mehta.jpg' }
    ];

    // Initialize with the first therapist
    this.updateCurrentTherapist();
  }

  updateCurrentTherapist() {
    if (this.therapists.length > 0) {
      this.currentTherapist = this.therapists[this.currentTherapistIndex];
    }
  }

  navigateTherapist(direction: 'left' | 'right') {
    if (direction === 'left') {
      this.currentTherapistIndex = (this.currentTherapistIndex - 1 + this.therapists.length) % this.therapists.length;
    } else if (direction === 'right') {
      this.currentTherapistIndex = (this.currentTherapistIndex + 1) % this.therapists.length;
    }
    this.updateCurrentTherapist();
  }

  onBookNow() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userBookObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userBookObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert("Booking Success");
  }
}
