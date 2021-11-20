import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Mae West', 'You only leave once, but if you do it right, once is enough.', new Date(2020,4,8)),
    new Quote(2, 'Babe Ruth', 'Never let the fear of stiking out keep you from playing the game.',new Date(2011,11,11)),
    new Quote(3, 'Albert Einstein', 'If you want to live a happy life, live it to a goal not to people or things.',new Date(2019,7,12)),
    new Quote(4, 'John P Rockefeller' , 'Do not be afraid to give up the good to go for the great.',new Date(2016,4,7)),
    new Quote(5,'Icelandic Proverb','A wise man changes his mind, a fool never will.',new Date(2020,9,8)),
    new Quote(6, 'Leo Tolstoy','True life is lived when tiny changes occur.',new Date(2000,1,1)),
    
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
