import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  Datatable: any = [{
    id: 1, Satus: 'Active', Title: 'HR Officer: Confidentiality Skills', Test: '4 test 42 Questions'
  },
  {
    id: 2, Satus: 'Active', Title: 'HR Officer: Confidentiality Skills', Test: '4 test 42 Questions'
  },
  {
    id: 3, Satus: 'Active', Title: 'HR Officer: Confidentiality Skills', Test: '4 test 42 Questions'
  }, {
    id: 4, Satus: 'Active', Title: 'HR Officer: Confidentiality Skills', Test: '4 test 42 Questions'
  },
  {
    id: 5, Satus: 'Active', Title: 'HR Officer: Confidentiality Skills', Test: '4 test 42 Questions'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
