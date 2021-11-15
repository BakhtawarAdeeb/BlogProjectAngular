import { User } from "./user";

export class Post{
        
        title: string;
        description : string;
      //  author: User;
    
    constructor(title: string, description : string ){
        this.title= title;
        this.description=description;
        //this.author=author;
    }
}