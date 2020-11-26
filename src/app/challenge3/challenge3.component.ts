import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component implements OnInit {

  showContent = false;
  btnDisplayText = 'Show Details';
  log = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeButtonStatus(): boolean {
    this.log.push(this.log.length + 1);
    this.showContent = !this.showContent;
    this.btnDisplayText = this.showContent ? 'Hide Details' : 'Show Details';
    return this.showContent;
  }

}
