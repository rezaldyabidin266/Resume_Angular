import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {

  email: string = "";
  subject: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}.com&su=${this.subject}&body=${this.message}`, '_blank');
  }

}
