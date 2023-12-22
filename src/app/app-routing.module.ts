import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { GradeCalculationComponent } from './grade-calculation/grade-calculation.component';


const routes: Routes = [
  { path: '', redirectTo: '/registration-form', pathMatch: 'full' },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'student-information', component: StudentInformationComponent },
  { path: 'grade-calculation', component: GradeCalculationComponent },
  // Add more routes for other components/pages if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
