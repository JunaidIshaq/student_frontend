import {RouterModule, Routes} from "@angular/router";
import {StudentListComponent} from "./student-list/student-list.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },
  { path: 'view-student', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
