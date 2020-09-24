import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 
  name: string;
  email: string;
  message: string;

  submitForm() {
    const formSubmission = `My name is ${this.name}. My email address is ${this.email}. Message: ${this.message}`
    alert(formSubmission)
  }

  constructor() { }

  ngOnInit() {
  }

}
