import { Component, Input } from '@angular/core';
import { MovieDetailsCard } from '../../interfaces/movie-details-card';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movie-details-card-component',
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './movie-details-card-component.html',
  styleUrl: './movie-details-card-component.css'
})
export class MovieDetailsCardComponent {
@Input() movie!: MovieDetailsCard ;
}
