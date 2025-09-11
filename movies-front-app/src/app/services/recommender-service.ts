import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieDetailsCard } from '../interfaces/movie-details-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommenderService {
  constructor(private http: HttpClient){}
  private baseUrl: string = 'http://localhost:5000'

  getRecommendationsCollaborative(userId: number): Observable<MovieDetailsCard[]> {
    return this.http.get<MovieDetailsCard[]>(`${this.baseUrl}/collab/${userId}`)
  }
}
