import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) {}

  //get all countries
    getCountries():Observable<any>{
      const url = "https://api.covid19api.com/countries"
      return this.http.get<any>(url)
  }

    getCoronaRealData(country):Observable<any>{
       const url = "https://api.covid19api.com/total/country/"+ country
       return this.http.get<any>(url)
  }

  getTotal():Observable<any>{
    const url = "https://api.covid19api.com/world/total"
    return this.http.get<any>(url)
}

}
