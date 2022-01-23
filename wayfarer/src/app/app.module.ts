import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    PostsComponent,
    SearchComponent,
    CreatePostComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
