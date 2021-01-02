import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  Highcharts =Highcharts;
  chartOptions={}
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
        type: 'area',
        bgcolor:null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    legend:{
      enabled:false
    },
    credits:{
      enabled:false
    },
    xAxis:{
      label:{
        enabled:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    yAxis:{
      label:{
        enabled:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
   exporting:{
     enabled:true
   },
    series: [{
        data:this.data
    }]
};
HC_exporting(Highcharts);
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  );
},300);
  }

}
