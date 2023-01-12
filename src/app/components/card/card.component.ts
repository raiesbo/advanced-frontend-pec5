import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() person!: Person;
  id!: string;

  constructor() { }

  ngOnInit(): void {
    this.id = this.person.url.split('/').at(-2) || '';
  }
}
