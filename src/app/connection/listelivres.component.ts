import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listelivres',
  templateUrl: './listelivres.component.html',
  styleUrls: ['./listelivres.component.css']
})
export class ListelivresComponent implements OnInit {
  listlivres: string[];
  auteur: string[];
 
  constructor() {
    this.listlivres = ["livres php", "livres ajax", "livres javascript"];
    this.auteur = ["Jonasy", "Lutheran", "Randria"];
    
   }

  ngOnInit(): void {
  }

}
