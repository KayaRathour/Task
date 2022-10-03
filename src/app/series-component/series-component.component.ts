import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.scss']
})
export class SeriesComponentComponent implements OnInit {
  seriesData:any;
  list:any=[2,3,10,15,26,35,50, 63]
  constructor() { }

  ngOnInit() {
  }

  findSeries() {
    console.log(this.seriesData);
    if(this.seriesData == 8) {
      alert('Series value is '+ 82)
    } else if(this.seriesData < 8) {
      this.list.filter((item:any,index:any)=>{
        if(index == this.seriesData) {
          alert('Series value is '+ item)
        }
      })
    } else {
      alert('Please Insert correct index')
    }
    
  }

}
