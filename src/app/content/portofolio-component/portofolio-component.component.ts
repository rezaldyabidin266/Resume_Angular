import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio-component',
  templateUrl: './portofolio-component.component.html',
  styleUrls: ['./portofolio-component.component.scss']
})
export class PortofolioComponentComponent implements OnInit {

  breakpoint: number | undefined;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 599.98) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 599.98) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }

  goPorto(url: string): void {
    window.open(url, '_blank');
  }

}
