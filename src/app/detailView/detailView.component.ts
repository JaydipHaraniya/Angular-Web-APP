import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'detail-View',
  templateUrl: './detailView.component.html',
  styleUrls: ['./detailView.component.css'],
  providers: [],

})
export class detailViewComponent implements OnInit {
  public counter: number = 0;
  public data: any;
  @Input() public ToatalmovieData = [];
  ngOnInit() {

  }
}
