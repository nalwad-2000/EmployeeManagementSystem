import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from 'src/app/services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CommentService } from 'src/app/Services/comment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit{

  jobs:any=[];
  jpd: any;
  graphdata: any=[];
  canmonth: any=[];

  constructor(private _http:HttpClient, private commentService: CommentService, private route:ActivatedRoute,private enrollmentService:EnrollmentService, private userService:UsersService){
  }

  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;

  ngOnInit() {

    this.enrollmentService.explorejob()
    .subscribe(data => {
      this.jobs = data;
      console.log(this.jobs,'jobs data');
      this.enrollmentService.jobDetailsforgraph = data;
      console.log(this.enrollmentService.jobDetailsforgraph,'service job details');
      //const { ifError } = require("assert")
      this.jpd = this.enrollmentService.jobDetailsforgraph;
      console.log(this.jpd,'this is job name');
      //this.graphdata = [10,-10,10,-10,10,-10,10,-10,10,-10,10];
      let months=[
        {month:'Jan',value:0},
        {month:'Feb',value:0},
        {month:'Mar',value:0},
        {month:'Apr',value:0},
        {month:'May',value:0},
        {month:'Jun',value:0},
        {month:'Jul',value:0},
        {month:'Aug',value:0},
        {month:'Sep',value:0},
        {month:'Oct',value:0},
        {month:'Nov',value:0},
        {month:'Dec',value:0}
    ]
    let monthsData=[]
    let c=0
    
    this.jpd.map(data=>{
        let date=(new Date(data.jobpostingdate.split('/').reverse().join('/')).toDateString().split(' '))
        monthsData.push(date[1])
    })
    
    for(let i=0;i<monthsData.length;i++){
        months.map(el=>{
            if(el.month===monthsData[i]){
                el.value++
            }
        })
    }
    months.map(el=>{
        this.canmonth.push(el.value);
    })
    
    console.log(this.canmonth);
     
    });

    this.chartData = [{
      data: this.canmonth,
      label: 'JOBS POSTED BY TIME',
      fill: true
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sept','Oct','Nov','Dec'];
    this.chartColors = [{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
         borderColor: 'rgba(0, 0, 0, 1)'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
         drawTime: 'beforeDatasetsDraw',
         annotations: [{
            type: 'box',
            id: 'a-box-1',
            yScaleID: 'y-axis-0',
            yMin: 0,
            yMax: 1,
            backgroundColor: '#4cf03b'
         }, {
            type: 'box',
            id: 'a-box-2',
            yScaleID: 'y-axis-0',
            yMin: 1,
            yMax: 2.7,
            backgroundColor: '#fefe32'
         }, {
            type: 'box',
            id: 'a-box-3',
            yScaleID: 'y-axis-0',
            yMin: 2.7,
            yMax: 5,
            backgroundColor: '#fe3232'
         }]
      }
    }
   
  }
}
