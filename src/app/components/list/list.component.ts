import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.interface';
import { DataService } from 'src/app/services/data.service';

type ApiResponse = {
  results: Person[]
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Person[] = [];
  withGridView: boolean = false;
  displayedColumns: string[] = ['name', 'birth_year', 'gender', 'mass'];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople(): void {
    this.dataService.getPeople().subscribe((result: ApiResponse) => {
      this.people = result.results;
    }, (error: any) => {
      console.log(error);
    })
  }

  toggleView(view: string): void {
    this.withGridView = view === 'grid';
  }
}
