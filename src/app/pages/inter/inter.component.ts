import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit {

  public users: any=[];



  constructor(private spinner: NgxSpinnerService,private services: UserService) { 
      
  }

  ngOnInit(): void {
    this.getListado();
  
  }

  getListado(){
    this.spinner.show();
    this.services.getList().subscribe(response=>{
      this.spinner.hide();
      this.users = response;
      console.log(this.users);
    })
  }

}
