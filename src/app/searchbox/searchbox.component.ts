import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { APPService } from '../app.component.service'

import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(private el: ElementRef,private _APPService: APPService) { }
  @Output() MovieData = new EventEmitter();
  @Output() loading = new EventEmitter<boolean>()
  public data: any;
  public image:boolean;
  public result: any;
  ngOnInit() {
    this.image=true;
  }
  
  searchMovieData(data){
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((data: string) => data.length > 1),
      debounceTime(250),
      tap(() => this.loading.emit(true)),
      map((query: string) => this._APPService.getMovie(query)),
      switchAll(),
    ).subscribe((results) => {
      this.data = results;
      this.result = this.data.results;
      this.loading.emit(false);
      this.image=false;
      this.MovieData.emit(this.result),
      // console.log("==djashdgaksdaskjdhak",this.MovieData)
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    })


  }

 
}
