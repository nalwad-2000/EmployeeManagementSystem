import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from 'src/app/services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CommentService } from 'src/app/Services/comment.service';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  user: any=[];
  canstatus: any;
  newArray=[];
  newArray1 = [];

  constructor(private _http:HttpClient, private commentService: CommentService, private route:ActivatedRoute,private enrollmentService:EnrollmentService, private userService:UsersService){
  }

  //events
  public chartClicked(e:any):void {
    console.log(e);
    }

    public chartHovered(e:any):void {
    console.log(e);
    }

  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public pieChartType: string = 'pie';
  public pieChartData: any[];
  public piechartbackgroundcolours: any[];
  public pieChartLabels: any[];

  ngOnInit() {

    this.enrollmentService.explore()
      .subscribe(data => {
        this.user = data;
        console.log(this.user,'candidates status pie chart');
        this.enrollmentService.jobDetailsforcanpiegraph = data;
        console.log(this.enrollmentService.jobDetailsforcanpiegraph,'candidate status from service');
        this.canstatus = this.enrollmentService.jobDetailsforcanpiegraph;
        console.log(this.canstatus,'this is candidate status');

        let candidate_status = [{status:'Applied',value:this.user.length},{status:'Selected',value:0},{status:'Rejected',value:0}];
        this.user.map(e1 => {
          e1.currentstatus.map(data => {
            candidate_status.map(e2 => {
              if(data.currentstatus===e2.status){
                e2.value++
              }
            })
          })
          this.newArray = [];
          candidate_status.map(e1 => {
            this.newArray.push(e1.value);
          })
        })
        console.log(this.newArray,'total number of status')
        /*this.user.map(e1 => {
          candidate_status.map(data => {
            if(e1.currentstatus.slice(-1)[0]===data.status){
              data.value++
            }
          })
        })
        console.log(this.newArray);
        candidate_status.map(e1 => {
          this.newArray.push(e1.value);
        })
        console.log(this.newArray)*/
        var ctxP = <HTMLCanvasElement> document.getElementById("pieChart1");
        var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Applied", "Selected", "Rejected"],
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
      })
  }
}
