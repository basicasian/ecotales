import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ImageData } from '../data/data-image';

@Component({
  selector: 'app-contribute-panda',
  templateUrl: './contribute-panda.page.html',
  styleUrls: ['./contribute-panda.page.scss'],
})
export class ContributePandaPage implements OnInit {

  images: ImageData[] = [
    {
      src: 'https://i.etsystatic.com/39444598/r/il/8594b7/4724622363/il_1588xN.4724622363_he20.jpg',
      title: 'panda and humans',
      text: 'This is the first sample image.'
    },
    {
      src: 'https://www.creativefabrica.com/wp-content/uploads/2023/03/18/watercolor-panda-vector-illustration-Graphics-64669253-1-1-580x387.jpg',
      title: 'water colour panda',
      text: 'This is the second sample image.'
    },
    {
      src: 'https://t4.ftcdn.net/jpg/05/98/56/99/360_F_598569952_q5h7Z3FkRdpSZrZorsAqH73x1MELNxIK.jpg',
      title: 'the was once upon a time a panda who...',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://assets.teenvogue.com/photos/59e226a544d1c409bf422aa5/master/w_1600,c_limit/GettyImages-860897142.jpg',
      title: 'Panda Conservation and Research Center in China ',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://qph.cf2.quoracdn.net/main-qimg-5492f4adb3425a3bba145a8c82b6185d-lq',
      title: 'A Panda with his Caretaker ',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://www.zoovienna.at/media/_versions_/userphotos/norbert-potensky/2014-04/foto_38_ma_animal_detail_935.jpg',
      title: 'Bao Bao\'s First Climb',
      text: 'This is the first sample image.'
    },
    {
      src: 'https://assets.teenvogue.com/photos/59e22755a875a3564524a95c/16:9/w_2240,c_limit/GettyImages-860938106.jpg',
      title: '36 Baby Pandas Debut at the China Conservation and Research Center for the Giant Panda',
      text: 'This is the second sample image.'
    },
    {
      src: 'https://img.freepik.com/vektoren-kostenlos/pandas-konzeptillustration_114360-7664.jpg?w=1380&t=st=1716646599~exp=1716647199~hmac=7c7de7ed08f4ee9f983f65510734defb5eeb91bbfa82a44fce33b80b5bf6d527',
      title: 'the modern panda',
      text: 'This is the third sample image.'
    },
    {
      src: 'http://en.people.cn/NMediaFile/2018/0926/FOREIGN201809261601000079177020752.jpeg',
      title: 'a first adventure',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://media1.tenor.com/m/06uIzDXgpzAAAAAd/panda.gif',
      title: 'pandas second favourite food, carrots ',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://www.zoovienna.at/media/_versions_/historische_bilder/pandaspaar_animal_detail_935.jpg',
      title: 'Pandas are social creatures',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://images.photowall.com/products/77719/panda-family.jpg?h=699&q=85',
      title: 'a family of pandas',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://media0.faz.net/ppmedia/w1240/aktuell/gesellschaft/2069964342/1.9299660/1900x850/der-grosse-panda-tian-tian-im.jpg.webp',
      title: 'Panda Mei Mei in Washington',
      text: 'This is the third sample image.'
    },
    {
      src: 'https://artprojectsforkids.org/wp-content/uploads/2021/12/How-to-Draw-a-Panda.jpg',
      title: 'Educating kids about pandas',
      text: 'This is the third sample image.'
    }
  ];

  column1: ImageData[] = [];
  column2: ImageData[] = [];

  constructor() { }

  ngOnInit() {
    this.splitColumns();
  }

  splitColumns() {
    for (let i = 0; i < this.images.length; i++) {
      if (i % 2 === 0) {
        this.column1.push(this.images[i]);
      } else {
        this.column2.push(this.images[i]);
      }
    }
  }

  uploadImage() {
    
  }
}
