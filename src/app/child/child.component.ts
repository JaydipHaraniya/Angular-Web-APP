import { Component, OnInit,EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [],

})
export class ChildComponent implements OnInit {
  @Input() loc: any;
  @Input() textInptData;
  @Output() public MovieReviewData = new EventEmitter();


  ngOnInit() {
  }

  detailView(data){
    this.MovieReviewData.emit(data);
    //console.log("=fgdsgfdgfdgfdg79846545",data)

  }





}
