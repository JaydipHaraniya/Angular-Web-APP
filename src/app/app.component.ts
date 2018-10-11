import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() movieData;
  public ToatalmovieData;
  loading: boolean;
  
  loc = [];
  public result: any;
  public textInpt: any;

  constructor() { }
  ngOnInit() {
    
  }
  searchMovieData(data) {
    this.result = data;
  }
  totaldata(data) {
    this.ToatalmovieData = data;
   // console.log("the details for movie",this.ToatalmovieData )
  }

}
