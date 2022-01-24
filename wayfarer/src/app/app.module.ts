import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    PostsComponent,
    SearchComponent,
    CreatePostComponent,
    SideMenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
