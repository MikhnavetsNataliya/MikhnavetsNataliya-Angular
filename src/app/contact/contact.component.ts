import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output()
  update: EventEmitter<any> = new EventEmitter<any>();
  name: string;
  email: string;
  phone: string;
  message: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(isValid: boolean) {
    const infoClient = `Меня зовут ${this.name}. Email ${this.email}. Телефон: ${this.phone}. Сообщение: ${this.message}`;
    alert(infoClient);
  }
}
