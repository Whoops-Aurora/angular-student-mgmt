import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  students: any[] = [];

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      course: ['', Validators.required],
      marks: this.formBuilder.array([
        ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        ['', [Validators.required, Validators.min(0), Validators.max(100)]]
      ])
    });
    this.students = this.studentService.getAllStudents();
  }

  get marksArray() {
    return this.registrationForm.get('marks') as FormArray;
  }

  getFormControl(index: number) {
    return this.marksArray.controls[index] as FormControl;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      const studentData = {
        name: formValue.name,
        course: formValue.course,
        marks: formValue.marks
      };
      this.studentService.addStudent(studentData);
      this.students = this.studentService.getAllStudents(); // Update the list of students
      this.registrationForm.reset(); // Reset the form after submission
    } else {
      // Handle form validation errors
    }
  }
}
