import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MovieDetailsCard } from '../../interfaces/movie-details-card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MovieDetailsCardComponent } from '../movie-details-card-component/movie-details-card-component';
import { RecommenderService } from '../../services/recommender-service';
import { catchError, pipe } from 'rxjs';



@Component({
	selector: 'colaborative-component',
	imports: [MatCardModule, MatChipsModule, CommonModule, MovieDetailsCardComponent],
	templateUrl: './colaborative-component.html',
	styleUrl: './colaborative-component.css',

})
export class ColaborativeComponent implements OnInit {
	ngOnInit(): void {
		this.recommenderService.getRecommendationsCollaborative(300).subscribe(
			{
				next: data => {
					this.movies = data
					// console.log(this.movies)
				},
				error: err => {
					console.log(err)
					this.movies = []
				}
			}
		);
	}
	constructor(private recommenderService: RecommenderService) { }
	movies!: MovieDetailsCard[];
}
