import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {

  };
  heros: Hero[] = [];

  selectedHero?: Hero;

  onSelect(here: Hero): void {
    this.selectedHero = here;
  }


  getHeroes(): void {
    // this.heros = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}
