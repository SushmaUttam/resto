import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/resto";
  regURL = "http://localhost:3000/users";
  constructor(private _http:HttpClient) { }

  getRestoList(){
    console.log("Into getRestoList");
    return this._http.get(this.URL);
  }

  addResto(data){
    return this._http.post(this.URL, data);
  }

  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`);
  }

  updateResto(id,data){
    return this._http.put(`${this.URL}/${id}`, data);
  }

  deleteResto(id){
    return this._http.delete(`${this.URL}/${id}`);
  }

  createUser(data){
    return this._http.post(this.regURL,data);
  }

  getUsers(){
    return this._http.get(this.regURL);
  }

}
