import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa-form',
  templateUrl: './visa-form.component.html',
  styleUrls: ['./visa-form.component.css']
})
export class VisaFormComponent {

  list=[];
  purpose:string;
  reg ='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  //Create Visa Form Group
  visaForm = new  FormGroup({
    name:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    email:new FormControl('',Validators.compose([Validators.required, Validators.pattern(this.reg)])),
    phone:new FormControl('',Validators.compose([ Validators.required, Validators.pattern("[0-9]{10}")])),
    date:new FormControl('',Validators.required)
  });

  date:Date;
  id:any;
  interviewer:string;

  //PreDefined Declarations
  purposes = ['Visa','Permanent-Residence'];
  cities=['Brighton','Cardiff','London','Belfast','NewCastle','ElseWhere'];
  ivr = ['Ramesh','Suresh','Mahesh','Rajesh','Mukesh','Sukesh','Brijesh'];

  item;
  ids = [];
  err;
  succ = false;

  constructor(private router:Router){}

  //To Generate ID and Random Interviewer
  genId(){    
    this.id = "#"+Math.floor(Math.random()*10000000000000);    
    this.item = this.ivr[Math.floor(Math.random()*this.ivr.length)];
  }

  ngOnInit() {
    this.list = JSON.parse(sessionStorage.getItem('list'))
  }

  //onSubmit Actions
  onSubmit(){    
    this.visaForm.value['Purpose'] = this.purpose;
    this.visaForm.value['Interviewer'] = this.item;
    this.visaForm.value['ID'] = this.id;
    if(this.list.includes(this.visaForm.value)){
      this.err = 'Duplicate Form!!! Please Reset';
      this.succ=false;
    }else{
      this.list.push(this.visaForm.value);
      this.err='';
      this.succ = true;
    }  
  }

  //On Reset new ID and Interviewer generated
  //reset needed for new form each time
  reset(){
    this.genId();
  }

  //navigation to list all applications
  move(){
    sessionStorage.setItem('list',JSON.stringify(this.list));
    this.router.navigate(['list']);
  }
  
}
