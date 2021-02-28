import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [TestimonialsComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
