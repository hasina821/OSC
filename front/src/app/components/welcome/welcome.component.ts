import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message!:string;

  constructor() { }

  ngOnInit(): void {
    this.message="Bonjour et bienvenue sur OSC,apprenez-vous autrement";
  }

}
