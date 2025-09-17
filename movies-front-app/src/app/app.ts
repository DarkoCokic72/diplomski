import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule
]

@Component({
  selector: 'app-root',
  imports: [
    ...MODULES,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies-front-app');
}
