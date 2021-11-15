import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post';
import { User } from '../user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 
  form: any;
  isSuccessful = false;
  isPostFailed = false;
  errorMessage = '';
  currentUser: any;
 

  constructor(private service : AuthService, 
    private fb: FormBuilder, private token: TokenStorageService) { 

  }

  ngOnInit(): void{
    this.form = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(3)] ],
      description: ['', Validators.required ],
     
    });

    this.currentUser = this.token.getUser();
   }

   get title() { return this.form.get('title'); }
   get description() { return this.form.get('description'); }

  postNow(): void{ 
    const { title, description } = this.form.value;
    const username:string = this.token.getUsername();
    
    console.log(username);
    let reponse = this.service.doPost(title, description,username);
    reponse.subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.isPostFailed = false;
     // this.reloadPage();
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


