import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() person!: Person;
  id!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = this.person.url.split('/').at(-2) || '';
  }

  navigateToDetails(): void {
    this.router.navigateByUrl(`/person/${this.id}`);
  }
}
