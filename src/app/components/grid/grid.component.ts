import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() people!: Array<Person>;
  @Input() displayedColumns!: Array<string>;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(url: string): void {
    const id = url.split('/').at(-2);
    if (id) this.router.navigateByUrl(`/person/${id}`);
  }
}
