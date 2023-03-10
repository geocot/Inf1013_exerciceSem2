import {Component} from '@angular/core';
import {Student} from "./modeles/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inf1013';
  students: Student[] = []
  membre_selected?: Student;

  constructor() {
    this.students.push({
      fname: "Martin",
      lname: "Couture",
      cp: "COUM111111",
      scores: [{name: "Cours1", value: 91}, {name: "Cours2", value: 85}]
    })
    this.students.push({fname: "Bob", lname: "Éponge", cp: "BOBE111111", scores: [{name: "Cours2", value: 78}]})
    this.students.push({fname: "Patrick", lname: "Étoile", cp: "PATE111111", scores: [{name: "Cours3", value: 95}]})
  }

  select(ss: Student) {
    this.membre_selected = ss
    console.log(ss)
  }

}
