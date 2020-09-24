import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [

    trigger('formSubmittedAnim', [

        transition('* => *', [

          query(':self', style({ opacity: 0}), {optional: true}),

          query(':self', stagger('300ms', [
            animate('.5s ease-in', keyframes([
              style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
              style({opacity: .5, transform: 'translateX(0px)', offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
            ]))
          ]), {optional: true})

        ])

      ])
    ]
})
export class ContactFormComponent implements OnInit {
 
  name: string;
  email: string;
  message: string;

  giveConfirmation: boolean = false;

  contactFormCollection: AngularFirestoreCollection<any>

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  submitForm() {

    this.contactFormCollection = this.afs.collection('contact-form-submissions')
    this.contactFormCollection.add({ name: this.name, email: this.email, message: this.message })
    this.giveConfirmation = true;

  }

  closeConfirmation() {
    this.giveConfirmation = false
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }

}