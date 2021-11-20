import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Mae West', 'You only leave once, but if you do it right, once is enough.'),
    new Quote(2, 'Babe Ruth', 'Never let the fear of stiking out keep you from playing the game.'),
    new Quote(3, 'Albert Einstein', 'If you want to live a happy life, live it to a goal not to people or things.'),
    new Quote(4, 'John P Rockefeller' , 'Do not be afraid to give up the good to go for the great.'),
    new Quote(5,'Icelandic Proverb','A wise man changes his mind, a fool never will.'),
    new Quote(6, 'Leo Tolstoy','True life is lived when tiny changes occur.'),
    
  ]
  showDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
