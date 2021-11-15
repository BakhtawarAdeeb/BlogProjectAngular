import { User } from "./user";
import { Post } from "./post";

export class Extra{
        
       user:User;
       post:Post;
    
    constructor(user: User, post:Post ){
        this.user= user;
        this.post=post;
    }
}