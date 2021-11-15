import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service'; 
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts : any;
  uposts:any;
  //currentUser: any;
  isSuccessful = false;
  isPostFailed = false;
  errorMessage = '';

  isupdated= false;

  constructor(private service : AuthService,private token: TokenStorageService, private fb: FormBuilder) { }

  ngOnInit() {
    //this.currentUser = this.token.getUser();
    let response = this.service.getMyPosts(this.token.getUsername());
    response.subscribe(data =>{ this.posts = data;})
  }

  public removeMyPost(id : number){
    let response = this.service.deleteMyPost(id);
    response.subscribe(data => 
      { console.log(data);
        this.isSuccessful = true;
        this.isPostFailed = false;
        this.reloadPage();
  },
  err => {
    this.errorMessage = err.error.message;
    this.isPostFailed = true;
  }
  );
}

  reloadPage(): void {
    window.location.reload();
  }
}
