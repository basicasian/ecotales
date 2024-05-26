import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageData } from '../data/data-image';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-contribute-panda',
  templateUrl: './contribute-panda.page.html',
  styleUrls: ['./contribute-panda.page.scss'],
})
export class ContributePandaPage implements OnInit {
  images: ImageData[] = [
    {
      "src": "https://i.etsystatic.com/39444598/r/il/8594b7/4724622363/il_1588xN.4724622363_he20.jpg",
      "title": "Panda and Humans",
      "text": "I recently visited a panda sanctuary with my family, and we had the most amazing experience interacting with these gentle giants! 🐼 My kids were thrilled to see pandas up close and personal. The caretakers were so knowledgeable and passionate about their work, it really inspired us. It made me realize how important it is to support these conservation efforts. Such a beautiful and educational trip! 🌿"
    },
    {
      "src": "https://www.creativefabrica.com/wp-content/uploads/2023/03/18/watercolor-panda-vector-illustration-Graphics-64669253-1-1-580x387.jpg",
      "title": "Water Colour Panda",
      "text": "Decided to try my hand at watercolor painting today and chose a panda as my subject. Here's my attempt! 🎨🐼 Painting really helped me appreciate the beauty and serenity of these amazing animals. It was a relaxing and rewarding experience. Anyone else using art as a way to connect with nature? I'd love to see your creations!"
    },
    {
      "src": "https://t4.ftcdn.net/jpg/05/98/56/99/360_F_598569952_q5h7Z3FkRdpSZrZorsAqH73x1MELNxIK.jpg",
      "title": "There was Once Upon a Time a Panda Who...",
      "text": "My child came up with a charming story about a panda who goes on magical adventures. We illustrated the story together, and this is one of the pictures. 🐼✨ It's such a wonderful way to stimulate their imagination and teach them about different animals at the same time. This storytime session was a big hit at our house!"
    },
    {
      "src": "https://assets.teenvogue.com/photos/59e226a544d1c409bf422aa5/master/w_1600,c_limit/GettyImages-860897142.jpg",
      "title": "Panda Conservation and Research Center in China",
      "text": "We recently took a virtual tour of the Panda Conservation and Research Center in China. It was fascinating to see how much effort goes into caring for these beautiful creatures. My kids were particularly excited to see the pandas playing and interacting with each other. 🐼🌏 It sparked a lot of questions and discussions about conservation at home."
    },
    {
      "src": "https://qph.cf2.quoracdn.net/main-qimg-5492f4adb3425a3bba145a8c82b6185d-lq",
      "title": "A Panda with his Caretaker",
      "text": "I saw this touching photo of a panda with its caretaker, and it reminded me of the importance of the human-animal bond in conservation efforts. 🤗 The trust and care between them are so heartwarming. This photo really shows the dedication and love that goes into protecting these gentle giants."
    },
    {
      "src": "https://www.zoovienna.at/media/_versions_/userphotos/norbert-potensky/2014-04/foto_38_ma_animal_detail_935.jpg",
      "title": "Bao Bao's First Climb",
      "text": "Here's a picture of young Bao Bao attempting its first climb. 🐼🌳 It’s such an adorable and significant moment! Watching this made me think about the different stages of growth and development in animals. Such a precious moment captured!"
    },
    {
      "src": "https://assets.teenvogue.com/photos/59e22755a875a3564524a95c/16:9/w_2240,c_limit/GettyImages-860938106.jpg",
      "title": "36 Baby Pandas Debut at the China Conservation and Research Center for the Giant Panda",
      "text": "Look at these 36 adorable baby pandas making their debut at the China Conservation and Research Center! 🐼🐼🐼 My kids and I watched a video about their introduction, and it was the cutest thing ever. It also opened up a conversation about breeding programs and their role in conservation. Such a joyful sight!"
    },
    {
      "src": "https://img.freepik.com/vektoren-kostenlos/pandas-konzeptillustration_114360-7664.jpg?w=1380&t=st=1716646599~exp=1716647199~hmac=7c7de7ed08f4ee9f983f65510734defb5eeb91bbfa82a44fce33b80b5bf6d527",
      "title": "The Modern Panda",
      "text": "I found this modern illustration of a panda, and it really resonated with me. 🐼🎨 The blend of traditional and contemporary styles makes it so unique. It’s a reminder of how pandas have been a part of human culture for so long, yet they still captivate us today. Art really has a way of connecting us to wildlife."
    },
    {
      "src": "http://en.people.cn/NMediaFile/2018/0926/FOREIGN201809261601000079177020752.jpeg",
      "title": "A First Adventure",
      "text": "Here's a young panda embarking on its first adventure outside. 🐼🌲 Watching this little one explore its surroundings for the first time is incredibly heartwarming. It made me think about the importance of providing a safe environment for all young creatures to explore and learn. Such a beautiful moment of discovery!"
    },
    {
      "src": "https://media1.tenor.com/m/06uIzDXgpzAAAAAd/panda.gif",
      "title": "Panda's Second Favorite Food, Carrots",
      "text": "I found this cute GIF of a panda enjoying its second favorite food, carrots! 🥕🐼 My kids loved watching it and now they want to feed carrots to every panda they see. It’s a fun way to teach them about animal diets and preferences. Pandas are just too adorable!"
    },
    {
      "src": "https://www.zoovienna.at/media/_versions_/historische_bilder/pandaspaar_animal_detail_935.jpg",
      "title": "Pandas are Social Creatures",
      "text": "This image of two pandas enjoying a peaceful moment together reminded me of how social these animals can be. 🐼❤️ It's so important for them to have companions. I try to explain to my kids that animals have social needs just like we do. Pandas are such loving creatures!"
    },
    {
      "src": "https://images.photowall.com/products/77719/panda-family.jpg?h=699&q=85",
      "title": "A Family of Pandas",
      "text": "We recently talked about panda families and how they live together, and this picture really brought that discussion to life for my kids. 🐼👨‍👩‍👧‍👦 Seeing a panda family so close-knit and loving is heartwarming. It’s a great way to teach children about family bonds in the animal kingdom."
    },
    {
      "src": "https://media0.faz.net/ppmedia/w1240/aktuell/gesellschaft/2069964342/1.9299660/1900x850/der-grosse-panda-tian-tian-im.jpg.webp",
      "title": "Panda Mei Mei in Washington",
      "text": "Here’s a picture of Panda Mei Mei enjoying her day in Washington. Seeing pandas in different parts of the world always fascinates my kids. 🐼🌍 It’s a good opportunity to talk about international conservation efforts and how different countries work together to protect wildlife. Mei Mei looks so happy!"
    },
    {
      "src": "https://artprojectsforkids.org/wp-content/uploads/2021/12/How-to-Draw-a-Panda.jpg",
      "title": "Educating Kids about Pandas",
      "text": "My daughter tried to draw a panda and that was the result! 🖍️🐼 I was wondering how you guys teach your kids about the importance of wildlife protection? We’ve been using drawing as a fun way to learn about pandas and other animals. It’s amazing how much they can absorb while being creative."
    }
  ]



  column1: ImageData[] = [];
  column2: ImageData[] = [];

  isModalOpen = false;
  currentImage: ImageData = {
    src: '',
    title: '',
    text: ''
  };

  constructor(private router: Router) {
  }


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

  setModalData(isOpen: boolean, newImage: ImageData) {
    this.isModalOpen = isOpen;
    this.currentImage = newImage;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

