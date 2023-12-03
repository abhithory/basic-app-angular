import { Injectable } from '@angular/core';
import { GitHubUserDetails, Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private heroesUrl = 'https://api.github.com/users';  // URL to web api

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    const herosData = this.http.get<Hero[]>(this.heroesUrl);
    return herosData;
  }

  getHero(id: string): Observable<GitHubUserDetails> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const herosData = this.http.get<GitHubUserDetails>(this.heroesUrl + "/" + id);
    return herosData;
  }
}
