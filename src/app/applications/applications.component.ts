import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})

export class ApplicationsComponent implements OnInit {
  list;
  displayedColumns = ['ID','Purpose','name','city','address','email','phone','Interviewer','date'];

  constructor(private route:Router) { }

  ngOnInit() {
    // get list from sessionstorage
    this.list = JSON.parse(sessionStorage.getItem('list'))
  }

  // navigate back to first page
  back(){
    this.route.navigate(['']);
  }
}
