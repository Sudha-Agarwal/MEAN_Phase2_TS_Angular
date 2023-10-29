import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css']
})
export class CourseChildComponent {
  @Input() course:Course = new Course();
  @Output() courseChange:EventEmitter<Course> =new EventEmitter<Course>(); 
    

  update() {
    this.courseChange.emit(this.course);
  }

}
