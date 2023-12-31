import { Component, Input, OnInit } from '@angular/core';
import { GitHubUserDetails, Hero } from '../hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent implements OnInit {

  hero?: GitHubUserDetails;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.getHero();
  }


  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
