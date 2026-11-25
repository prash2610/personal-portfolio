import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Hero, About, Skills, Projects, Experience, Contact],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Prashant Pote');
}
