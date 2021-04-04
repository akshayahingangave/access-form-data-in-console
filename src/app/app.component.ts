import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';

  info;
  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      fname: '',
      lname: '',
      email: '',
      contact: '',
      city:''
    })
  }

  onSubmit(values: any){
    console.warn("Form Submit", values)
    }

}
