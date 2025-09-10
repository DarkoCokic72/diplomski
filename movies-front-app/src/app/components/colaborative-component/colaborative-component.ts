import { Component } from '@angular/core';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MovieDetailsCard } from '../../interfaces/movie-details-card';
import {MatChipsModule} from '@angular/material/chips';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MovieDetailsCardComponent } from '../movie-details-card-component/movie-details-card-component';



@Component({
  selector: 'colaborative-component',
  imports: [MatCardModule, MatChipsModule, CommonModule, MovieDetailsCardComponent],
  templateUrl: './colaborative-component.html',
  styleUrl: './colaborative-component.css',
  
})
export class ColaborativeComponent {
  movies: MovieDetailsCard[] = [
	{
		"genres": [
			"Action",
			"Thriller"
		],
		"id": 562,
		"imdb_id": "tt0095016",
		"original_language": "en",
		"original_title": "Die Hard",
		"overview": "NYPD cop, John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'it', 'name': 'Italiano'}]",
		"title": "Die Hard",
		"vote_average": 7.5
	},
	{
		"genres": [
			"Drama",
			"History",
			"War"
		],
		"id": 659,
		"imdb_id": "tt0078875",
		"original_language": "de",
		"original_title": "Die Blechtrommel",
		"overview": "Oskar Matzerath, son of a local dealer, is a most unusual boy. Equipped with full intellect right from his birth he decides at his third birthday not to grow up as he sees the crazy world around him at the eve of World War II. So he refuses the society and his tin drum symbolizes his protest against the middle-class mentality of his family and neighborhood, which stand for all passive people in Nazi Germany at that time. However, (almost) nobody listens to him, so the catastrophe goes on...",
		"spoken_languages": "[{'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'he', 'name': 'עִבְרִית'}, {'iso_639_1': 'it', 'name': 'Italiano'}, {'iso_639_1': 'pl', 'name': 'Polski'}, {'iso_639_1': 'ru', 'name': 'Pусский'}]",
		"title": "The Tin Drum",
		"vote_average": 7.0
	},
	{
		"genres": [
			"Comedy",
			"Romance"
		],
		"id": 195,
		"imdb_id": "tt0023622",
		"original_language": "en",
		"original_title": "Trouble in Paradise",
		"overview": "Trouble in Paradise is one of the most important films of Actor, Producer, and Director Ernst Lubitisch, and his personal favorite of all the films he’s made. A story of two thieves who fall in love and begin doing jobs together under the employment of a beautiful woman who stirs up the relationship.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'it', 'name': 'Italiano'}]",
		"title": "Trouble in Paradise",
		"vote_average": 7.3
	},
	{
		"genres": [
			"Drama"
		],
		"id": 228,
		"imdb_id": "tt0020697",
		"original_language": "de",
		"original_title": "Der blaue Engel",
		"overview": "The Blue Angel follows Immanuel Rath (Emil Jannings) through a transformation from esteemed educator at the local Gymnasium (college preparatory high school) to a cabaret clown in Weimar Germany. Rath's descent begins when he punishes several of his students for circulating photographs of the beautiful Lola Lola (Marlene Dietrich) the headliner for the local cabaret, The Blue Angel. Hoping to catch the boys at the club, Professor Rath goes there later that evening and meets Lola herself. Consumed with desire and determined to remain at Lola's side, Rath returns to the night club the following evening (to return a pair of panties that were smuggled into his coat by one of his students) and stays the night with her. The next morning, reeling from his night of passion, Rath arrives late to school to find his classroom in chaos and the principal furious with his behavior.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]",
		"title": "The Blue Angel",
		"vote_average": 7.4
	},
	{
		"genres": [
			"Drama",
			"Romance"
		],
		"id": 6440,
		"imdb_id": "tt0120824",
		"original_language": "en",
		"original_title": "The Shipping News",
		"overview": "An emotionally-beaten man with his young daughter moves to his ancestral home in Newfoundland to reclaim his life.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
		"title": "The Shipping News",
		"vote_average": 6.4
	},
	{
		"genres": [
			"Action",
			"Science Fiction",
			"Thriller"
		],
		"id": 4965,
		"imdb_id": "tt0160399",
		"original_language": "en",
		"original_title": "Impostor",
		"overview": "Gary Sinise plays Spencer Olham, a top-secret government weapons designer who is arrested by a clandestine government organization on suspicion of being a clone created by the hostile alien race wanting to take over Earth.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
		"title": "Impostor",
		"vote_average": 6.1
	},
	{
		"genres": [
			"Comedy",
			"Drama",
			"Family"
		],
		"id": 4291,
		"imdb_id": "tt0199683",
		"original_language": "ja",
		"original_title": "菊次郎の夏",
		"overview": "Brash, loudmouthed and opportunistic, Kikujiro is the unlikely companion for Masao who is determined to see the mother he has never met. The two begin a series of adventures which soon turns out to be a whimsical journey of laughter and tears with a wide array of surprises and unique characters along the way.",
		"spoken_languages": "[{'iso_639_1': 'ja', 'name': '日本語'}]",
		"title": "Kikujiro",
		"vote_average": 7.5
	},
	{
		"genres": [
			"Drama"
		],
		"id": 1127,
		"imdb_id": "tt0434292",
		"original_language": "es",
		"original_title": "Princesas",
		"overview": "Set in Spain, the story is about friendship and love in the world of prostitution.",
		"spoken_languages": "[{'iso_639_1': 'es', 'name': 'Español'}]",
		"title": "Princesses",
		"vote_average": 6.9
	},
	{
		"genres": [
			"Drama"
		],
		"id": 2014,
		"imdb_id": "tt0880502",
		"original_language": "de",
		"original_title": "Auf der anderen Seite",
		"overview": "Nejat seems disapproving about his widower father Ali's choice of prostitute Yeter for a live-in girlfriend. But he grows fond of her when he discovers she sends money home to Turkey for her daughter's university studies. Yeter's sudden death distances father and son. Nejat travels to Istanbul to search for Yeter's daughter Ayten. Political activist Ayten has fled the Turkish police and is already in Germany. She is befriended by a young woman, Lotte, who invites rebellious Ayten to stay in her home, a gesture not particularly pleasing to her conservative mother Susanne. When Ayten is arrested and her asylum plea is denied, she is deported and imprisoned in Turkey. Lotte travels to Turkey,where she gets caught up in the seemingly hopeless situation of freeing Ayten.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'tr', 'name': 'Türkçe'}]",
		"title": "The Edge of Heaven",
		"vote_average": 6.6
	},
	{
		"genres": [
			"Comedy",
			"Horror"
		],
		"id": 1961,
		"imdb_id": "tt0489235",
		"original_language": "en",
		"original_title": "My Name Is Bruce",
		"overview": "B Movie Legend Bruce Campbell is mistaken for his character Ash from the Evil Dead trilogy and forced to fight a real monster in a small town in Oregon.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
		"title": "My Name Is Bruce",
		"vote_average": 5.9
	},
	{
		"genres": [
			"Drama"
		],
		"id": 2010,
		"imdb_id": "tt1016205",
		"original_language": "ja",
		"original_title": "殯の森",
		"overview": "A caregiver at a small retirement home takes one of her patients for a drive to the country, but the two wind up stranded in a forest where they embark on an exhausting and enlightening two-day journey.",
		"spoken_languages": "[{'iso_639_1': 'ja', 'name': '日本語'}]",
		"title": "The Mourning Forest",
		"vote_average": 6.2
	},
	{
		"genres": [
			"Documentary",
			"Music"
		],
		"id": 30867,
		"imdb_id": "tt0486541",
		"original_language": "en",
		"original_title": "Scott Walker: 30 Century Man",
		"overview": "A documentary on the influential musician Scott Walker.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
		"title": "Scott Walker: 30 Century Man",
		"vote_average": 7.0
	},
	{
		"genres": [
			"Comedy",
			"Romance"
		],
		"id": 95744,
		"imdb_id": "tt1847629",
		"original_language": "en",
		"original_title": "La montaña rusa",
		"overview": "Three childhood friends meet again many years later, a woman and two men. A triangle. In one corner, sex, in another, love, and in the middle ... the protagonist in a mess. Romantic and sentimental comedy about sex, love and its many complicated combinations.",
		"spoken_languages": "[{'iso_639_1': 'es', 'name': 'Español'}]",
		"title": "La montaña rusa",
		"vote_average": 5.0
	},
	{
		"genres": [
			"Comedy"
		],
		"id": 1616,
		"imdb_id": "tt0427219",
		"original_language": "de",
		"original_title": "Erkan & Stefan in Der Tod kommt krass",
		"overview": "The 3rd movie by the comedian duo Erkan and Stefan.",
		"spoken_languages": "[{'iso_639_1': 'de', 'name': 'Deutsch'}]",
		"title": "Erkan & Stefan 3",
		"vote_average": 3.8
	},
	{
		"genres": [
			"Drama",
			"Thriller",
			"Romance"
		],
		"id": 70418,
		"imdb_id": "tt1647483",
		"original_language": "en",
		"original_title": "Wasted on the Young",
		"overview": "When a high school party goes dangerously off the rails, one teenager finds that revenge is just a computer click away.",
		"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
		"title": "Wasted on the Young",
		"vote_average": 5.3
	}
]
		
}
