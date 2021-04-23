import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from 'src/app/services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CommentService } from 'src/app/Services/comment.service';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-locpiechart',
  templateUrl: './locpiechart.component.html',
  styleUrls: ['./locpiechart.component.css']
})
export class LocpiechartComponent  {

  jobs: any=[];
  jobloc: any;
  newArray=[];
  newArray1 = [];

  constructor(private _http:HttpClient, private commentService: CommentService, private route:ActivatedRoute,private enrollmentService:EnrollmentService, private userService:UsersService){
  }

  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public pieChartType: string = 'pie';
  public pieChartData: any[];
  public piechartbackgroundcolours: any[];
  public pieChartLabels: any[];

      //events
      public chartClicked(e:any):void {
        console.log(e);
        }
   
        public chartHovered(e:any):void {
        console.log(e);
        }

  ngOnInit() {

    this.enrollmentService.explorejob()
      .subscribe(data => {
        this.jobs = data;
        console.log(this.jobs,'joblocation pie chart');
        this.enrollmentService.jobDetailsforpiegraph = data;
        console.log(this.enrollmentService.jobDetailsforpiegraph,'joblocation pie chart from service');
        this.jobloc = this.enrollmentService.jobDetailsforpiegraph;
        console.log(this.jobloc,'this is job location');
        
        let location = [{preferedlocation:'Bangalore',value:0},{preferedlocation:'Mumbai',value:0},{preferedlocation:'Baroda',value:0}];
        this.jobs.map(e1 => {
          location.map(data=> {
            if(e1.preferedlocation===data.preferedlocation){
              data.value++
            }
          })
        })
        
        console.log(this.newArray,'new');
        location.map(e1=> {
          this.newArray.push(e1.value);
        })
        console.log(this.newArray,'line 68');
        var ctxP = <HTMLCanvasElement> document.getElementById("pieChart");
        var myPieChart = new Chart(ctxP, {
          type: 'pie',
          data: {
            labels: ["Bangalore", "Mumbai", "Baroda"],
            datasets: [{
              data: this.newArray,
              backgroundColor: ["#ff99cc", "#ffcc80", "#66d9ff"],
              //hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }]
          },
          options: {
            responsive: true
          }
        });
      });
  }
}

