import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.scss']
})
export class Dynamic2Component implements OnInit {
  @Input() shareData:any;

  constructor() { }

  ngOnInit() {
  }

}
