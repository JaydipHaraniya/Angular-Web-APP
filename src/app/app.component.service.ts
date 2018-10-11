import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APPService {

  constructor(private http:HttpClient) { }

  URL = 'https://api.themoviedb.org/3/search/movie?api_key=d8fa248e12a683818d392f8b67e5db48&language=en-US&page=1&include_adult=false&query=gone' ;

  getMovie(data) {
    
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=d8fa248e12a683818d392f8b67e5db48&language=en-US&page=1&include_adult=false&query='+data);
}

}