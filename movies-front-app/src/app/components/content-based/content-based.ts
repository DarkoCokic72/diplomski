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
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RecommenderService } from '../../services/recommender-service';



const MODULES = [
  MatCardModule,
  MatChipsModule,
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  ButtonModule,
  CarouselModule,
  FormsModule,
  MatIconModule,

]

@Component({
  selector: 'content-based',
  imports: [...MODULES, MovieDetailsCardComponent],
  templateUrl: './content-based.html',
  styleUrl: './content-based.css'
})
export class ContentBasedComponent {
  constructor(private recommenderService: RecommenderService) { }

  newMessage!: string;
  messages: any[] = [];

  sendMessage() {
    this.messages.push({ "type": "user", "content": this.newMessage })
    this.recommenderService.getRecommendationContentBased(this.newMessage).subscribe({
      next: data => {
        var newMessageObj = {
          "type": "system",
          "content": data
        }

        this.messages.push(newMessageObj)
        this.newMessage = ''
      }, error: err => {
        console.log(err)
        var errorMessageObj = {
          "type": "error",
          "content": "Whoops! an error occured"
        }
        this.messages.push(errorMessageObj)
        this.newMessage = ''

      }
    })
    this.newMessage = ''
  }

  isUserMessage(message: any) {
    return message.type === 'user'
  }
}
