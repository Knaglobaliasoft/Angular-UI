import { Component, OnInit } from '@angular/core';
import {New_menu} from '../../menu'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isaddclass: boolean = false
  hello:any=New_menu
  constructor() { }

  ngOnInit(): void {
    console.log("this.logggg",this.hello);
    
  }
  addclass() {
    this.isaddclass = !this.isaddclass
  }
}
