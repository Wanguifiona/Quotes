import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1, name: 'Mae West', description: 'You only leave once, but if you do it right, once is enough'},
    {id:2, name: 'Babe Ruth', description:'Never let the fear of stiking out keep you from playing the game'},
    {id:3, name: 'Albert Einstein', description:'If you want to live a happy life, live it to a goal not to people or things'},
    {id:4, name: 'John P Rockefeller', description:'Don/t be afraid to give up the good to go for the great'},
    {id:5, name: 'Icelandic Proverb', description:'A wise man changes his mind, a fool never will'},
    {id:6, name: 'Leo Tolstoy', description:'True life is lived when tiny changes occur'},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
