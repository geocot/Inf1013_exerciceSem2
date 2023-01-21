import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../modeles/student";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  @Input() selection: Student | undefined

  constructor() {

  }


  ngOnInit():void {
    console.log(this.selection)
  }
}


