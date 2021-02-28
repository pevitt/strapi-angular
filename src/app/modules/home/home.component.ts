import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiService } from '../../services/strapi.service';
import { ITesting } from '../../interfaces/testing';
import { ITestingdata } from '../../interfaces/testingdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headerInfo$:Observable<ITesting>;
  testimonials$:Observable<ITestingdata[]>;

  constructor(private _strapi:StrapiService) { }

  ngOnInit() {
    this.headerInfo$ = this._strapi.getHeader();
    this.testimonials$ = this._strapi.getTestimonials();
  }

}
