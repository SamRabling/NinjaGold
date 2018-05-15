import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (1) Imported HttpClient into the service. 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getNinjaGold();
    // this.showGold();

   }


   getNinjaGold(){
    return this._http.get('/gold')
   };

  //  showGold(){};
}
