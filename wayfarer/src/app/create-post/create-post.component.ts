import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CITIES } from '../cities/cities'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  city: any;
  title: string = '';
  author: string = '';
  body: string ='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
  }

  createPost(title: string, author: string, body: string) {
    const date = new Date();

    if (title.length < 1 || title.length > 200) {
      alert("Title must be 1-200 characters long.");
    } 
    else if (body.length === 0) {
      alert("Post body must not be empty.");
    } 
    else {
      const newPost = {
        id: this.city.posts.length + 1,
        date: date.toLocaleDateString(),
        author: author,
        title: title,
        body: body
      }
      console.log(newPost);
      CITIES[this.city.id-1].posts.push(newPost);
      this.router.navigate(['cities/', this.city.id]);
    }
  }

}
