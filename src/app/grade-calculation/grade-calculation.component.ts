import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-grade-calculation',
  templateUrl: './grade-calculation.component.html',
  styleUrls: ['./grade-calculation.component.css']
})
export class GradeCalculationComponent {
  constructor(private studentService: StudentService) {
    // Logic can be added here to calculate and display highest marks for each course
  }

  findHighestMarks(course: string) {
    return this.studentService.findHighestMarks(course);
  }
}
