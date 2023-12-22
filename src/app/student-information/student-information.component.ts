import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent {
  students: any[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.students;
  }

  calculateAverage(studentId: number) {
    return this.studentService.calculateAverageMarks(studentId);
  }

  calculateStudentGrade(averageMarks: number) {
    return this.studentService.calculateGrade(averageMarks);
  }
}
