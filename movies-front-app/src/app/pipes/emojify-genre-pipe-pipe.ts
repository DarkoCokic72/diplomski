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
}
  transform(value: string): string {
    const emoji = this.emojis[value]
    let retGenre = emoji + " " + value
    return retGenre;
  }

}
