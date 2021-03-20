import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  cheminImage:any = "url/vers/mon/image.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
