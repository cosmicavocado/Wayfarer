import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent
  },
  {
    path: 'cities/:id/posts/:postId',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
