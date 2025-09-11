import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsCard } from '../../interfaces/movie-details-card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MovieDetailsCardComponent } from '../movie-details-card-component/movie-details-card-component';
import { RecommenderService } from '../../services/recommender-service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
	selector: 'colaborative-component',
	imports: [
		...MODULES,
		MovieDetailsCardComponent,
	],
	templateUrl: './colaborative-component.html',
	styleUrl: './colaborative-component.css',

})
export class ColaborativeComponent implements OnInit {
	ngOnInit(): void {
		this.onSubmit()
	}
	constructor(private recommenderService: RecommenderService) { }
	loading: boolean = false;
	movies!: MovieDetailsCard[];
	userProfileFormGroup = new FormGroup({
		userId: new FormControl(
			2,
			[
				Validators.max(671),
				Validators.min(1),
				Validators.required
			]),
	})

	onSubmit() {
		this.loading = true;
		this.movies = []
		this.recommenderService.getRecommendationsCollaborative(this.userProfileFormGroup.value.userId as number).subscribe(
			{
				next: data => {
					this.movies = data
					this.loading = false

				},
				error: err => {
					console.log(err)
					this.movies = []
				}
			}
		);
	}
}
