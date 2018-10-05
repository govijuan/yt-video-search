import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {
  private _baseUrl: string = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&q=';
  private _apiKeyEndpoint: string = '&maxResults=6&key=AIzaSyCnudY3zFXadYcuMKinkmoi2xWo8gcl_X8'; 
  constructor(private http: HttpClient) { }
  searchFor(searchTerm: string, pageToken: string): Observable<any> {
    let searchString: string;
    if(pageToken){
      //retorna busca com pagetoken que serve para resultados da paginação
      searchString = this._baseUrl + searchTerm +  pageToken + this._apiKeyEndpoint;
    }else{
      //retorna busca direto do campo de busca, ou seja primeira página da busca, primeiros 6 resultados
      searchString = this._baseUrl + searchTerm + this._apiKeyEndpoint;
    }
    //console.log(searchString);
    return this.http.get(searchString);
  }
  retrieveVideoInfo(videoId: string){
    let queryUrl:string  = 'https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&part=snippet,statistics&key=AIzaSyCnudY3zFXadYcuMKinkmoi2xWo8gcl_X8';
    return this.http.get(queryUrl);
  }
}
