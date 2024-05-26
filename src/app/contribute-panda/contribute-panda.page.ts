import { Component, OnInit, ViewChild } from '@angular/core';
import { PostData } from '../data/data-post';
import { ModalType } from '../data/modal-type';

import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-contribute-panda',
  templateUrl: './contribute-panda.page.html',
  styleUrls: ['./contribute-panda.page.scss'],
})
export class ContributePandaPage implements OnInit {
  posts: PostData[] = [
    {
      "src": "https://i.etsystatic.com/39444598/r/il/8594b7/4724622363/il_1588xN.4724622363_he20.jpg",
      "title": "Panda and Humans",
      "text": "I recently visited a panda sanctuary with my family, and we had the most amazing experience interacting with these gentle giants! 🐼 My kids were thrilled to see pandas up close and personal. The caretakers were so knowledgeable and passionate about their work, it really inspired us. It made me realize how important it is to support these conservation efforts. Such a beautiful and educational trip! 🌿",
      "comments": ["Amazing experience!", "Your kids must have loved it!", "It's so important to support conservation efforts, I also think it is important to show kids that, we as adults, take these things seriously."]
    },
    {
      "src": "https://www.creativefabrica.com/wp-content/uploads/2023/03/18/watercolor-panda-vector-illustration-Graphics-64669253-1-1-580x387.jpg",
      "title": "Water Colour Panda",
      "text": "Decided to try my hand at watercolor painting today and chose a panda as my subject. Here's my attempt! 🎨🐼 Painting really helped me appreciate the beauty and serenity of these amazing animals. It was a relaxing and rewarding experience. Anyone else using art as a way to connect with nature? I'd love to see your creations!",
      "comments": ["Beautiful painting!", "You have a real talent.", "Art is such a great way to connect with nature."]
    },
    {
      "src": "https://t4.ftcdn.net/jpg/05/98/56/99/360_F_598569952_q5h7Z3FkRdpSZrZorsAqH73x1MELNxIK.jpg",
      "title": "There was Once Upon a Time a Panda Who...",
      "text": "My child came up with a charming story about a panda who goes on magical adventures. We illustrated the story together, and this is one of the pictures. 🐼✨ It's such a wonderful way to stimulate their imagination and teach them about different animals at the same time. This storytime session was a big hit at our house!",
      "comments": ["What a cute story!", "Your child is so creative.", "Illustrating the story together sounds like so much fun."]
    },
    {
      "src": "https://assets.teenvogue.com/photos/59e226a544d1c409bf422aa5/master/w_1600,c_limit/GettyImages-860897142.jpg",
      "title": "Panda Conservation and Research Center in China",
      "text": "We recently took a virtual tour of the Panda Conservation and Research Center in China. It was fascinating to see how much effort goes into caring for these beautiful creatures. My kids were particularly excited to see the pandas playing and interacting with each other. 🐼🌏 It sparked a lot of questions and discussions about conservation at home.",
      "comments": ["Virtual tours are such a great idea!", "Your kids must have learned so much.", "Conservation efforts are crucial."]
    },
    {
      "src": "https://qph.cf2.quoracdn.net/main-qimg-5492f4adb3425a3bba145a8c82b6185d-lq",
      "title": "A Panda with his Caretaker",
      "text": "I saw this touching photo of a panda with its caretaker, and it reminded me of the importance of the human-animal bond in conservation efforts. 🤗 The trust and care between them are so heartwarming. This photo really shows the dedication and love that goes into protecting these gentle giants.",
      "comments": ["Such a touching photo.", "The bond between them is beautiful.", "Conservationists do amazing work."]
    },
    {
      "src": "https://www.zoovienna.at/media/_versions_/userphotos/norbert-potensky/2014-04/foto_38_ma_animal_detail_935.jpg",
      "title": "Bao Bao's First Climb",
      "text": "Here's a picture of young Bao Bao attempting its first climb. 🐼🌳 It’s such an adorable and significant moment! Watching this made me think about the different stages of growth and development in animals. Such a precious moment captured!",
      "comments": ["Bao Bao is so cute!", "Such a precious moment.", "Watching them grow is so rewarding."]
    },
    {
      "src": "https://assets.teenvogue.com/photos/59e22755a875a3564524a95c/16:9/w_2240,c_limit/GettyImages-860938106.jpg",
      "title": "36 Baby Pandas Debut at the China Conservation and Research Center for the Giant Panda",
      "text": "Look at these 36 adorable baby pandas making their debut at the China Conservation and Research Center! 🐼🐼🐼 My kids and I watched a video about their introduction, and it was the cutest thing ever. It also opened up a conversation about breeding programs and their role in conservation. Such a joyful sight!",
      "comments": ["So many baby pandas!", "This is the cutest thing ever.", "Breeding programs are so important for conservation."]
    },
    {
      "src": "https://img.freepik.com/vektoren-kostenlos/pandas-konzeptillustration_114360-7664.jpg?w=1380&t=st=1716646599~exp=1716647199~hmac=7c7de7ed08f4ee9f983f65510734defb5eeb91bbfa82a44fce33b80b5bf6d527",
      "title": "The Modern Panda",
      "text": "I found this modern illustration of a panda, and it really resonated with me. 🐼🎨 The blend of traditional and contemporary styles makes it so unique. It’s a reminder of how pandas have been a part of human culture for so long, yet they still captivate us today. Art really has a way of connecting us to wildlife.",
      "comments": ["Love the modern style.", "Art connects us to nature in such a beautiful way.", "This illustration is stunning."]
    },
    {
      "src": "http://en.people.cn/NMediaFile/2018/0926/FOREIGN201809261601000079177020752.jpeg",
      "title": "A First Adventure",
      "text": "Here's a young panda embarking on its first adventure outside. 🐼🌲 Watching this little one explore its surroundings for the first time is incredibly heartwarming. It made me think about the importance of providing a safe environment for all young creatures to explore and learn. Such a beautiful moment of discovery!",
      "comments": ["First adventures are so special.", "This is heartwarming.", "Providing a safe environment is crucial."]
    },
    {
      "src": "https://media1.tenor.com/m/06uIzDXgpzAAAAAd/panda.gif",
      "title": "Panda's Second Favorite Food, Carrots",
      "text": "I found this cute GIF of a panda enjoying its second favorite food, carrots! 🥕🐼 My kids loved watching it and now they want to feed carrots to every panda they see. It’s a fun way to teach them about animal diets and preferences. Pandas are just too adorable!",
      "comments": ["This is so cute!", "Carrots are great for pandas.", "Your kids must have loved this."]
    },
    {
      "src": "https://www.zoovienna.at/media/_versions_/historische_bilder/pandaspaar_animal_detail_935.jpg",
      "title": "Pandas are Social Creatures",
      "text": "This image of two pandas enjoying a peaceful moment together reminded me of how social these animals can be. 🐼❤️ It's so important for them to have companions. I try to explain to my kids that animals have social needs just like we do. Pandas are such loving creatures!",
      "comments": ["Pandas are so social.", "It's important for them to have companions.", "This photo is heartwarming."]
    },
    {
      "src": "https://images.photowall.com/products/77719/panda-family.jpg?h=699&q=85",
      "title": "A Family of Pandas",
      "text": "We recently talked about panda families and how they live together, and this picture really brought that discussion to life for my kids. 🐼👨‍👩‍👧‍👦 Seeing a panda family so close-knit and loving is heartwarming. It’s a great way to teach children about family bonds in the animal kingdom.",
      "comments": ["Panda families are so cute.", "This is a great way to teach kids about family bonds.", "Seeing them together is heartwarming."]
    },
    {
      "src": "https://media0.faz.net/ppmedia/w1240/aktuell/gesellschaft/2069964342/1.9299660/1900x850/der-grosse-panda-tian-tian-im.jpg.webp",
      "title": "Panda Mei Mei in Washington",
      "text": "Here’s a picture of Panda Mei Mei enjoying her day in Washington. Seeing pandas in different parts of the world always fascinates my kids. 🐼🌍 It’s a good opportunity to talk about international conservation efforts and how different countries work together to protect wildlife. Mei Mei looks so happy!",
      "comments": ["Mei Mei looks so happy.", "It's fascinating to see pandas around the world.", "International conservation efforts are important."]
    },
    {
      "src": "https://artprojectsforkids.org/wp-content/uploads/2021/12/How-to-Draw-a-Panda.jpg",
      "title": "Educating Kids about Pandas",
      "text": "My daughter tried to draw a panda and that was the result! 🖍️🐼 I was wondering how you guys teach your kids about the importance of wildlife protection? We’ve been using drawing as a fun way to learn about pandas and other animals. It’s amazing how much they can absorb while being creative.",
      "comments": ["Great drawing!", "Drawing is a fun way to learn.", "Kids learn so much through creativity."]
    }
  ];

  column1: PostData[] = [];
  column2: PostData[] = [];

  currentPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };
  isViewModalOpen = false;
  isCreateModalOpen = false;

  newComment: string = '';

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.splitColumns();
  }

  splitColumns() {
    for (let i = 0; i < this.posts.length; i++) {
      if (i % 2 === 0) {
        this.column1.push(this.posts[i]);
      } else {
        this.column2.push(this.posts[i]);
      }
    }
  }


  setModalOpen(isOpen: boolean, type: string, data: undefined | PostData) {
    if (type === "create") {
      this.isCreateModalOpen = isOpen;
    }
    else if (type === "view") {
      this.isViewModalOpen = isOpen;
    }

    if (data != undefined) {
      this.currentPost = data;
    }
  }

  addComment() {
    this.currentPost.comments.push(this.newComment);
    console.log(this.newComment);

    this.newComment = '';
  }

  openFile(): void {
    const inputFile = document.getElementById('input_file') as HTMLInputElement;
    inputFile.click();
    console.log(inputFile.value);
  }
}

