import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-televersement',
  templateUrl: './televersement.component.html',
  styleUrls: ['./televersement.component.css']
})
export class TeleversementComponent implements OnInit {
  // exform : FormGroup;
  constructor() {
    
   }

  ngOnInit(): void {
  //   this.exform = new FormGroup({
  //     'nom': new FormControl(null, Validators.required),
  //     'mail': new FormControl([null, Validators.required, Validators.email]),
  //     'contact': new FormControl(null,
  //       [
  //         Validators.required,
  //         Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. (]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))s*$')
  //     ]
  //     ),
  //     'compte': new FormControl([null, Validators.required, Validators.minLength(8)]),
  //     'fichier': new FormControl(null, Validators.required),
  //     'typ_fic': new FormControl(null, Validators.required),
  //   });
  // };
  // ajout(){
  //   if(this.exform.valid) {
  //   let ajout = {
  //    nom: this.exform.controls['nom'].value,
  //     mail: this.exform.controls['mail'].value,
  //     contact: this.exform.controls['contact'].value,
  //     compte: this.exform.controls['compte'].value,
  //     typ_fic: this.exform.controls['typ_fic'].value,
  //     fichier: this.exform.controls['fichier'].value
  //   }
  //   };
  //   console.log(this.ajout);
  //   this.exform.reset();
  }
  
}
