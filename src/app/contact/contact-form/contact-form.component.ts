import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 
  name: string;
  email: string;
  message: string;

  contactFormCollection: AngularFirestoreCollection<any>

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  submitForm() {

    this.contactFormCollection = this.afs.collection('contact-form-submissions')
    this.contactFormCollection.add({ name: this.name, email: this.email, message: this.message })
  }

  ngOnInit() {
  }

}
