import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InfoData } from '../data/data-info';

@Component({
  selector: 'app-info-panda',
  templateUrl: './info-panda.page.html',
  styleUrls: ['./info-panda.page.scss'],
})
export class InfoPandaPage implements OnInit {

  infos: InfoData[] = [
    {
      "src": "",
      "title": "Preserving the Giant Panda",
      "subtitle": "Endangered No More? The Panda's Struggle and Hope",
      "text": "Giant pandas, with their adorable black and white fur and love for bamboo, are iconic animals. However, these gentle giants were once classified as endangered. Habitat loss and poaching threatened their very existence. But thanks to dedicated conservation efforts, the story of the panda offers a glimmer of hope."
    },
    {
      "src": "https://static.nationalgeographic.de/files/styles/image_3200/public/nl-travel-20200925-010rp.webp?w=1450&h=816",
      "title": "From Worm to Bear",
      "subtitle": "The life cycle of a panda",
      "text": "Pandas are solitary animals except for during mating season. Females give birth to one or two cubs at a time, and these cubs are incredibly tiny and helpless. Mothers care for their cubs for several years until they are old enough to survive on their own. But believe it or not, a panda starts life incredibly tiny! These adorable creatures hatch from an egg no bigger than a walnut, and initially resemble a blind, pink worm. Over time, they grow fur and develop their signature black and white markings. After a few months, they begin to walk and explore, eventually graduating to a bamboo diet - their main source of food as adults."
    },
    {
      "src": "",
      "title": "Road to Success",
      "subtitle": "Conservation Success Story",
      "text": "Protected areas like nature reserves offer pandas safe havens. Breeding programs in zoos help boost their numbers. With continued conservation efforts, these charismatic creatures have a brighter future."
    },
    {
      "src": "https://i.natgeofe.com/k/6f2282df-1c6a-474a-9216-ed97b3dce858/Panda-Bamboo_Panda-Quiz_KIDS_1021.jpg?wp=1&w=1436&h=958",
      "title": "Panda Diet",
      "subtitle": "What do pandas eat?",
      "text": "Giant pandas are obligate carnivores, meaning their bodies are adapted to get most of their nutrients from meat. However, their diet is surprisingly herbivorous, consisting almost entirely of bamboo. An adult panda can eat up to 80 pounds of bamboo a day!"
    },
    {
      "src": "",
      "title": "Panda Habitat",
      "subtitle": "Where do pandas live?",
      "text": "Giant pandas are native to southwestern China, where they live in mountainous regions with cool temperatures and dense bamboo forests. These forests provide them with food and shelter, and are crucial for their survival."
    },
    {
      "src": "",
      "title": "Threats to Pandas",
      "subtitle": "What are the challenges pandas face?",
      "text": "Despite their recent improvement in status, giant pandas still face many threats. Habitat loss due to human encroachment is a major concern. Additionally, climate change is disrupting bamboo forests, which are essential for their survival. Poaching, although less common than before, is still a threat."
    }
  ];

  constructor(private location: Location) { }
  
  goBack() {
    this.location.back(); // Use the location.back() method
  }

  ngOnInit() {
  }

}
