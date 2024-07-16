import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSerivceService {

constructor() { }

isLoggedIn(): boolean {
  if(localStorage.getItem('access-token'))
      return true; 
  else
      return false
}

}
