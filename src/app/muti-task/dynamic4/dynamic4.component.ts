import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic4',
  templateUrl: './dynamic4.component.html',
  styleUrls: ['./dynamic4.component.scss']
})
export class Dynamic4Component implements OnInit {
  @Input() shareData:any;

  constructor() { }

  ngOnInit() {
  }

}
