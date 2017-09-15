import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isExpanded: Array<boolean> = [false, false];

  /** Sample Data to show in the table */
  public datas: Array<any> = [
    {
      'id': '0',
      'info': 'info0',
      'details':
      [
        {
          'id': '1',
          'info': 'info1'
        },
        {
          'id': '2',
          'info': 'info2'
        },
        {
          'id': '3',
          'info': 'info3'
        }
      ]
    },
    {
      'id': '4',
      'info': 'info4',
      'details':
      [
        {
          'id': '5',
          'info': 'info5'
        },
        {
          'id': '6',
          'info': 'info6'
        },
        {
          'id': '7',
          'info': 'info7'
        }
      ]
    }
  ];

  public clicLine(pLineNumber: number): void {
    this.isExpanded[pLineNumber] = !this.isExpanded[pLineNumber];
  }
}
