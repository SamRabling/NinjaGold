import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  gold = 0;
  activity = "";
  // activity: string;
  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.getGold();
  }
  getGold(){
    this._httpService.getNinjaGold();
  }

  onClick(event){
    if ( event === 'farm'){
      let money = Math.floor(Math.random() * (20-10) + 10);
      this.gold += money;
      this.activity += `You earned ${money} at the ${event} \n`;

      console.log(`Click Event Farm is workiong: ${event}, Gold ${this.gold}, activity ${this.activity} `);
    }
    else if ( event === 'cave'){
      let money = Math.floor(Math.random() *(10-5) + 5);
      this.gold += money; 
      this.activity += `You earned ${money} at the ${event} \n`;
      console.log(`Click Event Cave is workiong: ${event}, Gold ${this.gold}, activity ${this.activity}` );
    }
    else if ( event === 'house'){
      let money = Math.floor(Math.random() * (5-2) + 2);
      this.gold += money;
      this.activity += `You earned ${money} at the ${event} \n` ;
      console.log(`Click Event House is workiong: ${event}, Gold ${this.gold}, activity ${this.activity}` );
    }
    else if ( event === 'casino'){
      let money = Math.floor(Math.random() * (50-10) -10);
      this.gold += money;
      this.activity += `You earned ${money} at the ${event} \n` ;
      if (this.gold < 0){
        this.gold = 0;
      }
      // session[:store_msg] += session[:msg] + "\n"
      console.log(`Click Event Casino is workiong: ${event}, Gold ${this.gold}, activity ${this.activity} `);
    };

     
    // findGold();
    //this data should be sent to the service as well as the activity 
  };



}
