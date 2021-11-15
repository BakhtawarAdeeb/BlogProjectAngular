import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-view-post-comments',
  templateUrl: './view-post-comments.component.html',
  styleUrls: ['./view-post-comments.component.css']
})
export class ViewPostCommentsComponent implements OnInit {

 comments:any;
  @Input() post: number;
  @Input() index: number;

  constructor(private service : AuthService) { }

  ngOnInit(): void {
      let response = this.service.getAllComments(this.post);
      response.subscribe(data =>{ this.comments= data;})
      //console.log(this.post); 
    }
  }

