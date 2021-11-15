import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor.ts.service';
import { AddPostComponent } from './add-post/add-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewPostCommentsComponent } from './all-posts/view-post-comments/view-post-comments.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AdminGuardGuard } from './admin-guard.guard';


@NgModule({
  declarations: [
    AddPostComponent,
    AllPostsComponent,
    AllUsersComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyPostsComponent,
    EditPostComponent,
    AddCommentComponent,
    ViewPostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,
  RouteGuardGuard,
  AdminGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }