import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : "all-users", component : AllUsersComponent, canActivate:[AdminGuardGuard]},
  { path : "addpost", component : AddPostComponent, canActivate: [RouteGuardGuard]},
  { path : "allposts", component : AllPostsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [RouteGuardGuard] },
  { path: 'my-posts', component: MyPostsComponent, canActivate: [RouteGuardGuard] },
  {path: 'edit-post/:id', component: EditPostComponent, canActivate: [RouteGuardGuard]},
  {path: 'add-comment/:id', component: AddCommentComponent, canActivate: [RouteGuardGuard]},
  { path: '', redirectTo: 'allposts', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }