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

  scoreGreater90(score:number): boolean { //Pour le ngClass
    let condition: boolean = false
    if (score >=90){
      condition = true;
    }
    return condition
  }

  ngOnInit():void {

  }
}


