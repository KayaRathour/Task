import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic3',
  templateUrl: './dynamic3.component.html',
  styleUrls: ['./dynamic3.component.scss']
})
export class Dynamic3Component implements OnInit {
  @Input() shareData:any;

  constructor() { }

  ngOnInit() {
  }

}
