import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  options: any[];

  constructor() {
    this.options = ["App Issue", "Exam Issue", "Other"];
  }

  ngOnInit() {
  }

}
