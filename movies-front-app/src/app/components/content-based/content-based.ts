import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovieDetailsCardComponent } from '../movie-details-card-component/movie-details-card-component';

const MODULES = [
	MatCardModule,
	MatChipsModule,
	CommonModule,
	ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatProgressSpinnerModule
]

@Component({
  selector: 'content-based',
  imports: [...MODULES, MovieDetailsCardComponent],
  templateUrl: './content-based.html',
  styleUrl: './content-based.css'
})
export class ContentBasedComponent {
  messages: any[] = [
    {
      "messageType": "user",
      "content": "hi"
    },
    {
      "messageType": "system",
      "content": "hi there"
    },
    {
      "messageType": "user",
      "content": "lorem"
    },
    {
      "messageType": "system",
      "content": "ipsum dolor"
    },
    {
      "messageType": "user",
      "content": "sit amet"
    },
    {
      "messageType": "system",
      "content": "consectetur faecit"
    },
        {
      "messageType": "user",
      "content": "hi"
    },
    {
      "messageType": "system",
      "content": "hi there"
    },
    {
      "messageType": "user",
      "content": "lorem"
    },
    {
      "messageType": "system",
      "content": "ipsum dolor"
    },
    {
      "messageType": "user",
      "content": "sit amet"
    },
    {
      "messageType": "system",
      "content": "This is a very very very long message that i am about to send. You can't even imagine how long this message will be."
    },
  ];

  isUserMessage(message: any){
    return message.messageType === 'user'
  }
}
