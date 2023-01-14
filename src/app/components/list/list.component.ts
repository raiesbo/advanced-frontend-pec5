import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople(): void {
    this.dataService.getPeople().subscribe((result: ApiResponse) => {
      this.people = result.results;
    }, (error: any) => {
      console.log(error);
      this.openSnackBar(error.message);
    })
  }

  toggleView(view: string): void {
    this.withGridView = view === 'grid';
  }

  openSnackBar(message: string) {
    this._snackBar.open(`${message}. Please, reload the page.`, 'X', {
      duration: 5000,
    });
  }
}
