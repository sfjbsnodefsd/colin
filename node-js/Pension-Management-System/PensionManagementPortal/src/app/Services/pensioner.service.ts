import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:5001/pensioner/getall';

@Injectable({
  providedIn: 'root',
})

export class PensionerService {


  getPensioners() {
    
    return this.http.get(BASE_URL);
  }
  //deleteUser(pensioner) {
   // return this.http.delete(BASE_URL+'/'+aadhaar);
  //}

  constructor(private http: HttpClient) {}
}
