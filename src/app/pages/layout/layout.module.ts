import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PageRoutingModule } from '../page-routing.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class LayoutModule { }
