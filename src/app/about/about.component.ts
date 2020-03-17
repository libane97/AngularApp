import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  editForm: FormGroup;
  constructor(private appService: AppService, private formBuilder: FormBuilder) {
    this.editForm = formBuilder.group({
      title: ['', Validators.required]
    });
  }
  tasks: any[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.get('http://127.0.0.1:8000/api/tasks').subscribe((response: any[]) => {
      this.tasks = response;
    });
  }

  sup(id: number) {
   this.appService.del('http://127.0.0.1:8000/api/tasks/' + id).subscribe(response => {
     console.log(response);
   });
  }
   modi(obj) {
       this.appService.modi('http://127.0.0.1:8000/api/tasks', obj).subscribe(response => {
           console.log(response);
       });
   }
   ajoute(obj) {
    const value = this.editForm.value;
    this.appService.ajoute('http://127.0.0.1:8000/api/tasks', value).subscribe(response => {
     this.getData();
    });
  }
  infos = {
    nom: 'med',
    email: 'med@gmail.com',
    telephone: 1233444555555
  };

  comment = [
    {
       date: new Date(),
       message: 'message watch'
    },
    {
      date: new Date(),
      message: 'message watch this'
    },
    {
      date: new Date(),
      message: 'message watch now'
    }
  ];
  commentaire= {date: null, message: ''};
  add() {
    this.commentaire.date = new Date();
    this.comment.push(this.commentaire);
    this.commentaire = {date: null, message: ''};
  }
}
