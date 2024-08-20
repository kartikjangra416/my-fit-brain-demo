import { Component, inject, OnInit } from '@angular/core';


import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 
  filteredDoctors: any[] = [];
  
  // Define a type for the categories
  categories: Array<'top-therapists' | 'marital-counselling' | 'sexual-counselling' | 'depression-counselling'> = 
    ['top-therapists', 'marital-counselling', 'sexual-counselling', 'depression-counselling'];

  allDoctors: { [K in typeof this.categories[number]]: any[] } = {
    'top-therapists': [
      { id: 1, name: 'Dr. John Doe', rating: '4.5', location: 'New York', languages: 'English, Spanish', fee: '$100' },
      { id: 2, name: 'Dr. Jane Smith', rating: '4.8', location: 'Los Angeles', languages: 'English', fee: '$120' },
      { id: 3, name: 'Dr. Alice Brown', rating: '4.7', location: 'Chicago', languages: 'English', fee: '$90' },
      { id: 4, name: 'Dr. Bob White', rating: '4.6', location: 'Houston', languages: 'English, French', fee: '$110' },
    ],
    'marital-counselling': [
      { id: 5, name: 'Dr. Michael Green', rating: '4.6', location: 'San Francisco', languages: 'English', fee: '$105' },
      { id: 6, name: 'Dr. Emily Harris', rating: '4.7', location: 'Seattle', languages: 'English', fee: '$115' },
      { id: 7, name: 'Dr. David Lee', rating: '4.5', location: 'Boston', languages: 'English, German', fee: '$95' },
      { id: 8, name: 'Dr. Sophia Martinez', rating: '4.8', location: 'Austin', languages: 'English, Spanish', fee: '$125' },
    ],
    'sexual-counselling': [
      { id: 9, name: 'Dr. Daniel Wright', rating: '4.6', location: 'Denver', languages: 'English', fee: '$110' },
      { id: 10, name: 'Dr. Olivia Young', rating: '4.7', location: 'Philadelphia', languages: 'English', fee: '$120' },
      { id: 11, name: 'Dr. James Wilson', rating: '4.5', location: 'San Diego', languages: 'English, French', fee: '$100' },
      { id: 12, name: 'Dr. Mia Thompson', rating: '4.8', location: 'Phoenix', languages: 'English, Italian', fee: '$130' },
    ],
    'depression-counselling': [
      { id: 13, name: 'Dr. William Brown', rating: '4.7', location: 'Dallas', languages: 'English', fee: '$105' },
      { id: 14, name: 'Dr. Ava Johnson', rating: '4.6', location: 'San Jose', languages: 'English, Spanish', fee: '$115' },
      { id: 15, name: 'Dr. Lucas Taylor', rating: '4.8', location: 'Jacksonville', languages: 'English', fee: '$125' },
      { id: 16, name: 'Dr. Isabella Lee', rating: '4.5', location: 'Indianapolis', languages: 'English, Chinese', fee: '$95' },
    ],
  };

  

  
  

  filterCategory(category: 'top-therapists' | 'marital-counselling' | 'sexual-counselling' | 'depression-counselling') {
    this.filteredDoctors = this.allDoctors[category] || [];
  }
}
