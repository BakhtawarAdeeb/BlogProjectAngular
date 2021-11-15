import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  username?: string;

  constructor(private token: TokenStorageService,
        private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.token.isLoggedIn();
    if(this.isLoggedIn)
    { this.isAdmin= this.token.isAdmin();}

    this.username = this.token.getUsername();
   
  }

  logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
    this.roles= [];
    this.isLoggedIn = false;
    this.isAdmin  = false;
  }
}