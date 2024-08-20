import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TherapistComponent } from './pages/therapists/therapists.component';

import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BookformComponent } from './pages/bookform/bookform.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'chatbot',
        component: ChatbotComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    
    {
        path: 'therapists',
        component: TherapistComponent
    },
   
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'bookform',
        component: BookformComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'therapists',
                component: TherapistComponent
            },
            
            {
                path: 'blog',
                component: BlogComponent
            }
        ]
    }
];
