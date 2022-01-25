import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent
  },
  {
    path: 'cities/:id/posts/:postId',
    component: PostsComponent
  },
  {
    path: 'cities/:id/createpost',
    component: CreatePostComponent
  },
  {
    path: 'search/:searchText',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
