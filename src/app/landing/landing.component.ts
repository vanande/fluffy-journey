import {Component} from '@angular/core';
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
  sliderValue: number = 50; // Initialize with the default value

  updateClipPath() {
    const sliderImgAfter = document.getElementById('slider-img-after');

    if (sliderImgAfter) {
      const percentageValue = this.sliderValue + '%';
      sliderImgAfter.style.clipPath = `polygon(0 0, ${percentageValue} 0, ${percentageValue} 100%, 0 100%)`;
    }

    console.log(this.sliderValue);
  }

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
