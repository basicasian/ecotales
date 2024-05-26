import { Component, OnInit } from '@angular/core';
import { HomeData } from '../data/data-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  infos: HomeData[] = [
    {
      "id": "panda",
      "src": "https://dailywildlifephoto.nathab.com/photography-guide/wp-content/uploads/2016/10/panda1.jpg",
      "title": "Pandas",
      "subtitle": "Learn about the gentle giants",
      "text": "Discover the fascinating world of pandas, from their 黑白 (heibai - black and white) fur to their love for bamboo. Explore their habitat, threats they face, and how you can help protect these cuddly creatures."
    },
    {
      "id": "lion",
      "src": "https://images.pexels.com/photos/11630690/pexels-photo-11630690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "title": "Lions",
      "subtitle": "The Kings and Queens of the Savanna",
      "text": "Reign supreme with the lion! Unravel the secrets of these social cats, their hunting prowess, and the importance of their role in the ecosystem. Learn about the challenges they face and what you can do to ensure their continued roar."
    },
    {
      "id": "tiger",
      "src": "https://a-z-animals.com/media/2021/12/tiger-768x401.jpg",
      "title": "Tigers",
      "subtitle": "Stripes of Survival",
      "text": "Explore the power and mystery of the tiger. These majestic big cats are crucial to healthy ecosystems, but face threats like habitat loss. Learn about the different tiger species, their role in nature, and how you can help ensure their survival."
    },
    {
      "id": "orangutan",
      "src": "https://i1.adis.ws/i/canon/pro-maxime-aliaga-orangutan-project-2_157b897803a64922922c7b50b69a0105?$media-collection-half-dt$",
      "title": "Orangutans",
      "subtitle": "Wise Swingers of the Rainforest",
      "text": "Meet the orangutans, the intelligent masters of the rainforest canopy! Their clever tool use, playful nature, and critically endangered status make them a captivating species. Discover their world, the threats they face from habitat loss, and how you can join the fight to protect these red-haired wonders."
    },
    {
      "id": "elephant",
      "src": "https://cdn.mos.cms.futurecdn.net/uiCrUgVCf64TzEdTM8x9aD-1200-80.jpg.webp",
      "title": "Elephants",
      "subtitle": "Giants of Memory and Family",
      "text": "Unveiling the wonder of elephants! These intelligent creatures boast incredible memories, strong social bonds, and play a vital role in their ecosystems. Learn about the different elephant species, the threats they face, and how you can help secure a future for these gentle giants."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
