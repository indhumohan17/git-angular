import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { first, firstValueFrom } from 'rxjs';
// import { Login } from './components/login/login';

interface I_QUOTE {
  id: number;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
   title = signal('project');

   loginForm!: FormGroup;

   name!:string;
   email!:string;
   mobile!:number;

  quotes!: I_QUOTE[];

  constructor(private fb: FormBuilder) {}

  // async getQuotes() {
  //   const url = 'https://dummyjson.com/quotes';
  //   const res: any = await firstValueFrom(this.httpClient.get(url));
  //   console.log(res);
  //   this.quotes = res.quotes;
  // }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [ '',[Validators.required]],
      email: [ '', [Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10)]]
    })
    // this.getQuotes();
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}

