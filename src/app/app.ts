import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { first, firstValueFrom } from 'rxjs';
// import { Login } from './components/login/login';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
   title = signal('project');

   loginForm!: FormGroup;

userObj: any = {
  name: '',
  email: '',
  mobile: ''
}
http = inject(HttpClient);

  // quotes!: I_QUOTE[];

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [ '',[Validators.required]],
      email: [ '', [Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10)]]
    })
  }
  
  onSaveUser(){
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register',this.userObj).subscribe(
      {next:(result)=>{
        alert('User Added Successfully');
        this.userObj = {
          name: '',
          email: '',
          mobile: '' 
      }
      },
      error:(error)=>{
        alert('Something went wrong');
      }
    }
    )}
}

