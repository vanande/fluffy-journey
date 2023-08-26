import { Component } from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class LandingComponent {
  question = 'question';

  slides = [
    {
      imageSrc: '../../assets/images/home/Image_AI__5.jpg',
      alt: 'first slide',
      label: 'House of Dream',
      caption: 'Build in seconds, dream for life.'
    },{
      imageSrc: '../../assets/images/home/Image_AI__2.jpg',
      alt: 'second slide',
      label: 'House of Cards',
      caption: 'Build in seconds, dream for life.'
    },{
      imageSrc: '../../assets/images/home/Image_AI__4.jpg',
      alt: 'third slide',
      label: 'House of Gold',
      caption: 'Build in seconds, dream for life.'
    },

  ];
}
