import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: string | null;
  person!: Person;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadPerson();
  }

  private loadPerson(): void {
    if (this.id) {
      this.dataService.getPersonById(this.id).subscribe((result) => {
        this.person = result;
      }, (error) => {
        console.log(error)
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
