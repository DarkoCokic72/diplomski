import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovieDetailsCardComponent } from '../movie-details-card-component/movie-details-card-component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';


const MODULES = [
  MatCardModule,
  MatChipsModule,
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  // MatButtonModule,
  MatProgressSpinnerModule,
  ButtonModule,
  CarouselModule
]

@Component({
  selector: 'content-based',
  imports: [...MODULES, MovieDetailsCardComponent],
  templateUrl: './content-based.html',
  styleUrl: './content-based.css'
})
export class ContentBasedComponent {
  messages: any[] = [
    {
      "type": "user",
      "content": "hi"
    },
    {
      "type": "system",
      "content": [
        {
          "genres": [
            "Comedy",
            "Science Fiction"
          ],
          "id": 76516,
          "imdb_id": "tt0100129",
          "original_language": "en",
          "original_title": "Meet the Applegates",
          "overview": "Giant preying mantis living in a south American jungle decide to move into suburban USA. Disguised as humans, the mantis are planning something.. Could it be connected to dad's job in the power station perhaps ?. One day the daughter mantis forgets WHAT she really is when she's with her boyfriend.. oops. Written by s jones",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Meet the Applegates",
          "vote_average": 5.0
        },
        {
          "genres": [],
          "id": 54968,
          "imdb_id": "tt0161977",
          "original_language": "en",
          "original_title": "Simon Magus",
          "overview": "Simon is an outcast from his Jewish community because he claims that the devil talks to him and he has the ability to put curses on crops. When Dovid asks the 'Squire' to sell him some land so he can build a railway station, a ruthless businessman from the neighbouring gentile community uses Simon to find out who wants to buy the land so he can 'persuade' him otherwise",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Simon Magus",
          "vote_average": 10.0
        },
        {
          "genres": [
            "Drama",
            "Romance"
          ],
          "id": 288129,
          "imdb_id": "tt2325833",
          "original_language": "en",
          "original_title": "Liz en Septiembre",
          "overview": "In September Liz tells the story of Liz a model who has a secret that is making them change your entire life and that perspective has to realize that in your love life missing. But that does not mean you like the party, so she goes with her ​​friends, as every year, to celebrate his birthday at a beach and then runs into a girl who makes you ding. Will you finally reach what has always been looking for?",
          "spoken_languages": "[{'iso_639_1': 'es', 'name': 'Español'}]",
          "title": "Liz in September",
          "vote_average": 6.6
        },
        {
          "genres": [
            "Comedy"
          ],
          "id": 27885,
          "imdb_id": "tt0107292",
          "original_language": "en",
          "original_title": "Just One of the Girls",
          "overview": "Chris has to change school to attend a music program, but a bully named Kurt is going to make his life impossible so he decided to dress as a girl to avoid this. Taking advantage of his condition he became (girl-)friend with Marie, and fell in love with her.",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Just One of the Girls",
          "vote_average": 5.3
        },
        {
          "genres": [
            "Family",
            "Comedy",
            "Crime"
          ],
          "id": 11391,
          "imdb_id": "tt0073482",
          "original_language": "da",
          "original_title": "Olsen-banden på sporet",
          "overview": "Egon and his two cronies managed to sneak a fortune with them to Spain. Here they live a life in a whirl of pleasures, but they are not truly happy. While Egon always has the money chained to him, Bøffen still manages to steal them. Egon ends up in jail once again, and when he comes out, he has a brilliant plan.",
          "spoken_languages": "[{'iso_639_1': 'da', 'name': 'Dansk'}]",
          "title": "The Olsen Gang on the Track",
          "vote_average": 7.3
        },
        {
          "genres": [
            "Comedy"
          ],
          "id": 40933,
          "imdb_id": "tt0049023",
          "original_language": "es",
          "original_title": "El bolero de Raquel",
          "overview": "The film tells an episode of the life of a kindly hearted bootblack who becomes accidentally the tutor of an orphan but nevertheless spends all his time and effort for the sake of the boy.",
          "spoken_languages": "[{'iso_639_1': 'es', 'name': 'Español'}]",
          "title": "El bolero de Raquel",
          "vote_average": 5.5
        },
        {
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "id": 457,
          "imdb_id": "tt0048624",
          "original_language": "de",
          "original_title": "Sissi",
          "overview": "The young Bavarian princess Elisabeth, who all call Sissi, goes with her mother and older sister Néné to Austria where Néné will be wed to an emperor named Franz Joseph, Yet unexpectedly Franz runs into Sissi while out fishing and they fall in love.",
          "spoken_languages": "[{'iso_639_1': 'de', 'name': 'Deutsch'}]",
          "title": "Sissi",
          "vote_average": 7.3
        },
        {
          "genres": [
            "Adventure",
            "Animation",
            "Drama",
            "Family"
          ],
          "id": 21250,
          "imdb_id": "tt0355315",
          "original_language": "en",
          "original_title": "Charlotte's Web 2: Wilbur's Great Adventure",
          "overview": "Wilbur the pig knows how important friendship is - he learned that from a spider named Charlotte. So when Wilbur meets Cardigan, a lonely lamb, Wilbur immediately makes him his friend.",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'sv', 'name': 'svenska'}]",
          "title": "Charlotte's Web 2: Wilbur's Great Adventure",
          "vote_average": 4.6
        },
        {
          "genres": [],
          "id": 310458,
          "imdb_id": "tt1219390",
          "original_language": "en",
          "original_title": "Zabardast",
          "overview": "A scientist makes a coat with natural powers. The coat lands in the hands of Pushkar who will use it to win the heart of his lady love.",
          "spoken_languages": "[]",
          "title": "Zabardast",
          "vote_average": 0.0
        },
        {
          "genres": [
            "Science Fiction"
          ],
          "id": 24047,
          "imdb_id": "tt0109078",
          "original_language": "en",
          "original_title": "Alien Nation: Dark Horizon",
          "overview": "Followup movie to the TV series about 250,000 aliens, or \"newcomers\" as they are known, who have by now settled alongside the humans in California. Most of the newcomers were slaves, and the slave masters are now looking for them. They send Aponso to earth to locate the slaves ready for the aliens to pick them up.",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Alien Nation: Dark Horizon",
          "vote_average": 6.2
        },
        {
          "genres": [
            "Drama",
            "Comedy"
          ],
          "id": 55589,
          "imdb_id": "tt0015768",
          "original_language": "da",
          "original_title": "Du skal ære din hustru",
          "overview": "A bully browbeats his wife and children until he meets his match in the woman who raised him.",
          "spoken_languages": "[{'iso_639_1': 'da', 'name': 'Dansk'}]",
          "title": "Master of the House",
          "vote_average": 6.7
        },
        {
          "genres": [
            "Science Fiction",
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "id": 2973,
          "imdb_id": "tt0014646",
          "original_language": "ru",
          "original_title": "Аэлита",
          "overview": "The movie is set at the beginning of the NEP (New Economic Policy) in December, 1921. A mysterious radio message is beamed around the world, and among the engineers who receive it are Los, the hero, and his colleague Spiridonov. Los is an individualist dreamer. Aelita is the daughter of Tuskub, the ruler of a totalitarian state on Mars in which the working classe are put into cold storage when they are not needed. With a telescope, Aelita is able to watch Los. As if by telepathy, Los obsesses about being watched by her. After some hugger-mugger involving the murder of his wife and a pursuing detective, Los takes the identity of Spiridonov and builds a spaceship. With the revolutionary Gusev, he travels to Mars, but the Earthlings and Aelita are thrown into prison by the dictator. Gusev and Los begin a proletarian uprising, and Aelita offers to lead.",
          "spoken_languages": "[{'iso_639_1': 'xx', 'name': 'No Language'}]",
          "title": "Aelita: Queen of Mars",
          "vote_average": 5.7
        },
        {
          "genres": [
            "Romance",
            "Drama"
          ],
          "id": 71097,
          "imdb_id": "tt0070879",
          "original_language": "en",
          "original_title": "Vild på sex",
          "overview": "Sixteen year old Bibi comes to her aunt Toni's boarding house where she is seduced by lesbian women.",
          "spoken_languages": "[{'iso_639_1': 'sv', 'name': 'svenska'}, {'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Bibi",
          "vote_average": 0.0
        },
        {
          "genres": [
            "Action"
          ],
          "id": 86223,
          "imdb_id": "tt0100531",
          "original_language": "en",
          "original_title": "Russian Terminator",
          "overview": "An ex-mercenary is enlisted back into the life to rescue the boyfriend of the daughter of a powerful mogul.",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "Russian Terminator",
          "vote_average": 8.0
        },
        {
          "genres": [],
          "id": 146072,
          "imdb_id": "tt0036475",
          "original_language": "en",
          "original_title": "The Underground World",
          "overview": "Superman has to save Lois Lane from a cult of hawk-people in an homage to Edgar Rice Burroughs's \"At the Earth's Core\".",
          "spoken_languages": "[]",
          "title": "The Underground World",
          "vote_average": 6.5
        },
        {
          "genres": [
            "Drama",
            "Romance"
          ],
          "id": 53042,
          "imdb_id": "tt0459072",
          "original_language": "pt",
          "original_title": "Alice",
          "overview": "In the wake of his daughter's disappearance, a father wallowing in grief feeds his desire to find her with unusual methods.",
          "spoken_languages": "[{'iso_639_1': 'pt', 'name': 'Português'}]",
          "title": "Alice",
          "vote_average": 6.8
        },
        {
          "genres": [
            "Drama",
            "Romance",
            "Thriller"
          ],
          "id": 429070,
          "imdb_id": "tt5687040",
          "original_language": "fr",
          "original_title": "Les fantômes d'Ismaël",
          "overview": "The film tells the tale of a widowed film director who is in the middle of making a film about an atypical diplomat inspired by his brother. While he has started a new life with Sylvia, he still mourns the death of a former lover, Carlotta, who passed away 20 years earlier; then Carlotta returns from the dead, causing Sylvia to run away.",
          "spoken_languages": "[{'iso_639_1': 'fr', 'name': 'Français'}]",
          "title": "Ismael's Ghosts",
          "vote_average": 5.5
        },
        {
          "genres": [
            "Mystery"
          ],
          "id": 27203,
          "imdb_id": "tt0039896",
          "original_language": "en",
          "original_title": "They Won't Believe Me",
          "overview": "A stockbroker (Robert Young) tells the court how his rich wife and one of two girlfriends (Susan Hayward, Jane Greer) died.",
          "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
          "title": "They Won't Believe Me",
          "vote_average": 6.2
        },
        {
          "genres": [
            "Foreign",
            "Thriller"
          ],
          "id": 32866,
          "imdb_id": "tt1570417",
          "original_language": "en",
          "original_title": "Accident On Hill Road",
          "overview": "Accident on Hill Road is a cunning and energetic thriller that takes its premise from the real-life incident of a woman who hit a man, then drove home and parked the car in the garage with the man wedged halfway through her windshield. Celina Jaitly stars as Sonam Chopra, a hard-partying, overworked nursing assistant in this delicious, darkly humorous psychological thriller.",
          "spoken_languages": "[{'iso_639_1': 'hi', 'name': 'हिन्दी'}]",
          "title": "Accident On Hill Road",
          "vote_average": 0.0
        },
        {
          "genres": [
            "Mystery",
            "Drama"
          ],
          "id": 104239,
          "imdb_id": "tt0067040",
          "original_language": "fr",
          "original_title": "L'Éden et après",
          "overview": "A group of French students are drawn into the psychological and sexual games of a mysterious Dutchman. Once they sample his \"fear powder\" the students experience a series of hallucinations.",
          "spoken_languages": "[{'iso_639_1': 'fr', 'name': 'Français'}]",
          "title": "Eden and After",
          "vote_average": 6.1
        }
      ]
    },

  ];

  isUserMessage(message: any) {
    return message.type === 'user'
  }
}
