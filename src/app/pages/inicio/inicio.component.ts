import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public user:any;

  constructor(private router: Router,private service: UserService) {
    this.user = new User('','',0,new Date)
   }


  ngOnInit(): void {
    console.log("inicio");
    
  }
  

  onSubmiit(){
    console.log("onsubmit")
    console.log(this.user);
    this.router.navigate(['/inter'])
    this.service.addUser(this.user).subscribe(repsonse=>{
      console.log('registro exitoso');
    },error=>{
      console.log(error);
    })

  }


}
