import { Component } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css']
})
export class CourseParentComponent {
  course: Course[] = [
 
    {courseNo: 1, courseName: 'Rahuld Dravid', author: '', fee: 100, description: 'Karnataka'},
    {courseNo: 2, courseName: 'Rahuld Dravid', author: '', fee: 100, description: 'Karnataka'},
    {courseNo: 3, courseName: 'Rahuld Dravid', author: '', fee: 100, description: 'Karnataka'},
    {courseNo: 4, courseName: 'Rahuld Dravid', author: '', fee: 100, description: 'Karnataka'},
    {courseNo: 5, courseName: 'Rahuld Dravid', author: '', fee: 100, description: 'Karnataka'},
 
  ];

  selectedCourse:Course = new Course();

  showDetails(course:Course) {
    this.selectedCourse=Object.assign({},course)
  }
  
  update(course:Course) {
    console.log(course)
    var crs=this.course.find(e => e.courseNo==course.courseNo)
    Object.assign(crs,course)
    alert("Course Saved")
  }

}
