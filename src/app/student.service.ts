import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: any[] = [];

  constructor() { }


  getAllStudents() {
    return this.students;
  }

  addStudent(studentData: any) {
    this.students.push(studentData);
  }

  calculateAverageMarks(studentId: number) {
    const student = this.students.find(student => student.id === studentId);
    if (student) {
      const totalMarks = Object.values(student.marks).reduce((acc: number, mark: any) => acc + mark, 0);
      return totalMarks / Object.keys(student.marks).length;
    }
    return 0;
  }
  

  calculateGrade(averageMarks: number) {
    if (averageMarks >= 90) {
      return 'A+';
    } else if (averageMarks >= 80) {
      return 'A';
    } else if (averageMarks >= 70) {
      return 'B';
    } else if (averageMarks >= 60) {
      return 'C';
    } else {
      return 'F';
    }
  }

  findHighestMarks(course: string) {
    let highestMarks = 0;
    for (const student of this.students) {
      if (student.marks[course] > highestMarks) {
        highestMarks = student.marks[course];
      }
    }
    return highestMarks;
  }
}
