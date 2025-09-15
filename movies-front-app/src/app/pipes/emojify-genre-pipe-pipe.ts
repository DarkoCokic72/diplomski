import { Pipe, PipeTransform } from '@angular/core';

interface EmojiDict {
  [key: string]: any;
}

@Pipe({
  name: 'emojifyGenre'
})
export class EmojifyGenrePipePipe implements PipeTransform {
  emojis: EmojiDict = {
  "Action": "💥",
  "Adventure": "🗺️",
  "Animation": "🎬",
  "Biopic": "🧑‍💼",
  "Comedy": "😂",
  "Crime": "🕵️",
  "Documentary": "📜",
  "Drama": "🎭",
  "Fantasy": "🧙",
  "Horror": "👻",
  "Musical": "🎶",
  "Music": "🎵",
  "Mystery": "❓",
  "Romance": "❤️",
  "Science Fiction": "🚀",
  "Thriller": "🔪",
  "Western": "🤠",
  "Family": "👪",
  "War": "⚔️",
  "History": "🏰",
  "Foreign": "🌐",
}
  transform(value: string): string {
    let emoji = this.emojis[value]
    if (!emoji){
      emoji = ""
    }
    let retGenre = emoji + " " + value
    return retGenre.trim();
  }

}
