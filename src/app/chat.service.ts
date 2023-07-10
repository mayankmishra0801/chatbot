import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message{
  constructor(public author:string,public content:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "hi":"hello",
    "Hii":"Hello",
    "who are you":"My name is Mayank chatbot",
    "What is angular":"Angular is the best framework ever",
    "default":"I can't understand,Can you please repeat other Wise Contact with Mayank Mishra"

  }

  getBotAnswer(msg:any){
    const userMessage = new Message('user',msg); //a object we are creating new Message, two parameter is there
    this.conversation.next([userMessage]);  //we are observing
     const botMessage = new Message('bot',this.getBotMessage(msg));  //
     setTimeout(()=>{
      this.conversation.next([botMessage]);
     },1500)
  }

  getBotMessage(question:string){

    let answer = this.messageMap[question];
    return answer || this.messageMap['default']  //

  }



}
