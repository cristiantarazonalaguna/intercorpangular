import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Report } from '../models/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public report: any;

  constructor(private service: UserService) { 
    this.report = new Report('','');
  }

  ngOnInit(): void {
    this.getReport();
  }

  getReport(){
    this.service.getKpi().subscribe((response)=>{
      this.report = response
      
      console.log(response);
    })
  }

}
