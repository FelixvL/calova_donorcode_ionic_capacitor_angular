import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  felixprobeersel = "hoi";
  naardemethode(){
    console.log("yes");
    this.felixprobeersel = "doe maar leeg"
  }
  constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['|', '|', '|', '|', '|', '|'],
          datasets: [{
              label: '',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(10, 5, 132, 0.5)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              fill:'start',
              borderColor: [
                  'rgba(10, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              tension: 0.3,
            

          }]
      },
      options: {
          scales: {
            x: {
              grid: {
                display: false, // Remove grid lines for x-axis
              },
            },
              y: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Remove grid lines for x-axis
                  },
                  ticks: {
                    display: false, // Remove labels and scale on the y-axis
                  }
              }
          }
      }
  });

  }

}
