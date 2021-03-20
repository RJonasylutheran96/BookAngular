import { Component, OnInit } from '@angular/core';
import { Livres } from '../home/model/livres';
// import { from } from 'rxjs';
// import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
  
})
export class LivresComponent implements OnInit {
  livres: Livres[];
  constructor() { 
    this.livres=[
      {idLivres:1, titreLivres: 'Angular', classmLivres: 'Education', fichLivres:'angular.pdf', date_ins: new Date('')},
      {idLivres:2, titreLivres: 'Nature', classmLivres: 'Environnement', fichLivres:'environnement.pdf', date_ins: new Date('')},
      {idLivres:3, titreLivres: 'Culture Malagasy', classmLivres: 'Tradition et Culturel', fichLivres:'Madagascar.pdf', date_ins: new Date('')},
      {idLivres:4, titreLivres: 'Football Mondial', classmLivres: 'Sportive', fichLivres:'sport.pdf', date_ins: new Date('')}
    ];
  }

  ngOnInit(): void {
  }

}
