import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 
  constructor() { }
 
  ngOnInit() {
  }
 
}
import { HEROES } from '../mock-heroes';
heroes = HEROES;

selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
