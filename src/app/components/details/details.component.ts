import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.interface';
import { Person } from 'src/app/models/person.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: string;
  person!: Person;
  films: Array<Film> = [];
  areDetailsVisible: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.loadPerson();
  }

  private loadPerson(): void {
    if (this.id) {
      this.dataService.getPersonById(this.id).subscribe((result) => {
        this.person = result;
        this.loadFilms();
      }, (error) => {
        console.log(error)
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

  private loadFilms(): void {
    if (this.person) {
      this.person.films.forEach((film: string) => {
        const filmId = film.split('/').at(-2);

        if (!filmId) return;

        this.dataService.getFilmById(filmId).subscribe((result) => {
          this.films = [...this.films, result];
        }, (error) => {
          console.log(error)
        })
      })
    }
  }

  toogleDetailsView(): void {
    this.areDetailsVisible = !this.areDetailsVisible;
  }
}
