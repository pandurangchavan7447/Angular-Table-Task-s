import { Component } from '@angular/core';
import { Ibook, Icourse, Icust, Iemp, Iorder, movie, proArr, std, tech, vehi } from './models/table';
import { bookArr, courseArr, customerArr, empArr, movieArr, orderArr, productArr, studentArr, teacherArr, vehicleArr } from './const/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTableTask';


 empArr:Array<Iemp> = empArr
 studentArr:Array<std> = studentArr
 productArr: Array<proArr> = productArr
 courseArr : Array<Icourse> = courseArr
 bookArr: Array<Ibook> = bookArr
 customerArr: Array<Icust> = customerArr
 orderArr: Array<Iorder> = orderArr
 movieArr: Array<movie> = movieArr
 teacherArr: Array<tech> = teacherArr 
 vehicleArr: Array<vehi> = vehicleArr



}