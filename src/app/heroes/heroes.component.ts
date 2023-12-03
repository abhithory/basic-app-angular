import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heros: Hero[] = [];

  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heros = heroes));
  }

}
