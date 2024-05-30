import { Component, OnInit } from '@angular/core';
import { DiscoverData } from '../data/data-discover';
import * as jsonInfos from '../../assets/json/infos-discover.json';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})


export class DiscoverPage implements OnInit {
  gptInfos: DiscoverData[] = [
    {
      "id": "panda",
      "src": "../../assets/images/panda.jpg",
      "title": "Pandas",
      "subtitle": "Learn about the gentle giants",
      "text": "Discover the fascinating world of pandas, from their 黑白 (heibai - black and white) fur to their love for bamboo. Explore their habitat, threats they face, and how you can help protect these cuddly creatures.",
      "href": "https://www.worldwildlife.org/species/giant-panda"
    },
    {
      "id": "lion",
      "src": "../../assets/images/lion.jpg",
      "title": "Lions",
      "subtitle": "The Kings and Queens of the Savanna",
      "text": "Reign supreme with the lion! Unravel the secrets of these social cats, their hunting prowess, and the importance of their role in the ecosystem. Learn about the challenges they face and what you can do to ensure their continued roar.",
      "href": "https://www.worldwildlife.org/species/lion--19"
    },
    {
      "id": "tiger",
      "src": "../../assets/images/tiger.jpg",
      "title": "Tigers",
      "subtitle": "Stripes of Survival",
      "text": "Explore the power and mystery of the tiger. These majestic big cats are crucial to healthy ecosystems, but face threats like habitat loss. Learn about the different tiger species, their role in nature, and how you can help ensure their survival.",
      "href": "https://www.worldwildlife.org/species/tiger"
    },
    {
      "id": "orangutan",
      "src": "../../assets/images/orangutan.jpg",
      "title": "Orangutans",
      "subtitle": "Wise Swingers of the Rainforest",
      "text": "Meet the orangutans, the intelligent masters of the rainforest canopy! Their clever tool use, playful nature, and critically endangered status make them a captivating species. Discover their world, the threats they face from habitat loss, and how you can join the fight to protect these red-haired wonders.",
      "href": "https://www.worldwildlife.org/species/orangutan"
    },
    {
      "id": "elephant",
      "src": "../../assets/images/elephant.jpg",
      "title": "Elephants",
      "subtitle": "Giants of Memory and Family",
      "text": "Unveiling the wonder of elephants! These intelligent creatures boast incredible memories, strong social bonds, and play a vital role in their ecosystems. Learn about the different elephant species, the threats they face, and how you can help secure a future for these gentle giants.",
      "href": "https://www.worldwildlife.org/species/elephant"
    }
  ];
  infos: DiscoverData[] = [];

  constructor() { }

  ngOnInit() {
    this.infos = (jsonInfos as any).default;

  }

}
