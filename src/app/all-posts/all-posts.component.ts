import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  posts : any;
  currentUser: any;
  isSuccessful = false;
  isPostFailed = false;
  errorMessage = '';
  constructor(private service : AuthService,private token: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.token.isLoggedIn();
    if(this.isLoggedIn)
    { this.isAdmin= this.token.isAdmin();}
   
    let response = this.service.getPosts();
    response.subscribe(data =>{ this.posts = data;
    })

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
  

