import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  @ViewChild('headerKalimat', { static: true }) headerKalimat!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    const target = this.headerKalimat.nativeElement
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      typeSpeed: 90,

    })
    writer
      .type("Front End Developer")
      .rest(1000)
      .clear()
      .type("UI/UX Designer")
      .rest(1000)
      .start()
  }

}

