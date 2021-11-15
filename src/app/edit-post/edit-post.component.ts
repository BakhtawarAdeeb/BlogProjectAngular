import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


import { TokenStorageService } from '../_services/token-storage.service'; 

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  form: any;
  //currentUser: any;
  currentPost = null;
  message = '';

  constructor
  (private service :AuthService,
    private fb: FormBuilder,
    private token: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(3)] ],
      description: ['', Validators.required ],
     
    });

    //this.currentUser = this.token.getUser();
    this.message = '';
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }



  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }

  getPost(id): void {
    this.service.getPost(id)
      .subscribe(
        data => {
          this.currentPost = data;
          this.form.patchValue({
            title: this.currentPost.title,
            description: this.currentPost.description
          });
          //console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePost(): void {
    const title = this.form.get('title').value;
    const description = this.form.get('description').value;
    const username = this.token.getUsername();
    this.service.updatePost(this.currentPost.id, title, description,username )
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Post was updated successfully!';
          this.router.navigate(['my-posts']);
        },
        error => {
          console.log(error);
        });
  }

  // deletePost(): void {
  //   this.service.delete(this.currentPost.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/Posts']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
