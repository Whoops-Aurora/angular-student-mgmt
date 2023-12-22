import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { GradeCalculationComponent } from './grade-calculation/grade-calculation.component';
import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    StudentInformationComponent,
    GradeCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
