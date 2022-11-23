import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './componets/album/album.component';
import { ArtistComponent } from './componets/artist/artist.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { FavouriteComponent } from './componets/favourite/favourite.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'artists/:id',component:ArtistComponent},
  {path:'albums/:id',component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
