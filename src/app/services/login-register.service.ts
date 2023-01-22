import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  private apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  
  getAllUsers(){
    return this.http.get(this.apiUrl+'user');
  }
  
  getUserById(id: string){
    return this.http.get(this.apiUrl+'user/'+id);
  }
  
  setRegistration(data: any){
    return this.http.post(this.apiUrl+'/user', data);
  }

  updateUser(id: string, data: any){
    return this.http.get(this.apiUrl+'user/'+id, data);
  }}
