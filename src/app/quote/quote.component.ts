import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Mae West', 'You only leave once, but if you do it right, once is enough.', 'Noah',new Date(2020,4,8)),
    new Quote(2, 'Babe Ruth', 'Never let the fear of stiking out keep you from playing the game.','Emma',new Date(2011,11,11)),
    new Quote(3, 'Albert Einstein', 'If you want to live a happy life, live it to a goal not to people or things.','Oliver' ,new Date(2019,7,12)),
    new Quote(4, 'John P Rockefeller' , 'Do not be afraid to give up the good to go for the great.','Ava',new Date(2016,4,7)),
    new Quote(5,'Icelandic Proverb','A wise man changes his mind, a fool never will.','Elijah',new Date(2020,9,8)),
    new Quote(6, 'Leo Tolstoy','True life is lived when tiny changes occur.','Charlotte',new Date(2019,1,1)),
    
  ]
  showDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].name}?`)
      
      if (toDelete){
      this.quotes.splice(index,1)
    }
   }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
