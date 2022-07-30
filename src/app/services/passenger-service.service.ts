import { Injectable } from '@angular/core';
import {PassengerModel} from '../models/passenger-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {

  //passengers_list:PassengerModel[];
  
    private baseURL = "http://localhost:8080/api/pto/passengers"
  
    constructor(private http:HttpClient) {
      
     }
  
  getAll(){
    return this.http.get(this.baseURL);
  }
  
  create(passenger:PassengerModel){
  
    return this.http.post('http://localhost:8080/api/pto/passengers',passenger);
  
  }
}
