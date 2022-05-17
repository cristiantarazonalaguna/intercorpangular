import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../pages/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://retointercopr.herokuapp.com/api/'
    //this.url = 'http://localhost:9090/api/'
  }

  getList(){
    const header = new HttpHeaders().set('Content-Type','application/json');

    return this.http.get(this.url+'listColaboradores',{headers:header})
  }

  addUser(user:User){
    const json = JSON.stringify(user);
    const params = json;
    const header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'altacolaborador',params,{headers:header});
  }

  getKpi(){
    const header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+'kpicolaboradores',{headers:header})
  }
}
