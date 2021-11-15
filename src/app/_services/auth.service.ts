import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  doPost(title: string, description: string, username:string): Observable<any> {
    return this.http.post(AUTH_API+ 'save-post',{
      title,
      description,
      username
    }, httpOptions);
  }

  doComment(comment: string, post: number, username:string): Observable<any> {
    return this.http.post(AUTH_API+ 'save-comment',{
      comment,
      post,
      username
    }, httpOptions);
  }

  public getUsers(){
    return this.http.get(AUTH_API+ "all-users" );
  }
  
  public getPosts(){
    return this.http.get("http://localhost:8080/api/auth/all-posts");
  }

  public getPost(id: number){
    return this.http.get("http://localhost:8080/api/auth/get-post/"+id);
  }

  public getMyPosts(username: string){
    return this.http.get("http://localhost:8080/api/auth/my-posts/"+username);
  }

  public getAllComments(id:number){
    return this.http.get("http://localhost:8080/api/auth/all-comments/"+id);
  }

  public updatePost(id: number, title: String, description: string, username:string): Observable<Object> {  
    return this.http.put("http://localhost:8080/api/auth/update-post/"+id, {title,description,username}, httpOptions);  
  } 

 
  public  deleteMyPost(id: number) :Observable<any> {
    return this.http.get("http://localhost:8080/api/auth/delete-my-post/"+id,httpOptions);
  }

  // public getUserByUsername(username: string){
  //   return this.http.get("http://localhost:8080/search/"+username);
  // }

  public deleteUser(username: string){
    return this.http.get("http://localhost:8080/api/auth/delete/"+username,httpOptions);
  }

  

}
