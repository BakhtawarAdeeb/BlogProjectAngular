import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';

import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  form: any;
  isSuccessful = false;
  isPostFailed = false;
  errorMessage = '';
  currentUser: any;
  postid: any;
  message = '';
  

  constructor(private service : AuthService, private token: TokenStorageService,
    private route: ActivatedRoute, private fb: FormBuilder,
    private router: Router) { 

  }

  ngOnInit(): void{

    this.form = this.fb.group({
      comment: ['',Validators.required ],
     
    });

  //  this.currentUser = this.token.getUser();
    this.message = '';
    this.postid= this.route.snapshot.paramMap.get('id');
   }

   get comment() { return this.form.get('comment'); }

  commentNow(): void{ 
    const comment = this.form.get('comment').value;
    
    const username:string = this.token.getUsername();
    //const username = this.currentUser.username;
    // console.log(username);
    let reponse = this.service.doComment(comment,this.postid,username);
    reponse.subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.isPostFailed = false;
     // this.reloadPage();
     this.router.navigate(['allposts']);
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
