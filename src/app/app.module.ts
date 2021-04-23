import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ChartsModule } from 'ng2-charts';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { JobsComponent } from './jobs/jobs.component';
import { AbtsComponent } from './abts/abts.component';
import { CtcusComponent } from './ctcus/ctcus.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { UsersService } from './services/users.service';
import { HeaderService } from './Services/header.service';
import { EmployeeService } from './Services/employee.service';
import { EnrollmentService } from './Services/enrollment.service';
import { CommentService } from './Services/comment.service';
import { JobComponent } from './jobs/job/job.component';
import { AddcandidateComponent } from './candidates/addcandidate/addcandidate.component';
import { AddjobComponent } from './jobs/addjob/addjob.component';
import { PiechartComponent } from './home/piechart/piechart.component';
import { LinechartComponent } from './home/linechart/linechart.component';
import { CanlinechartComponent } from './home/canlinechart/canlinechart.component';
import { LocpiechartComponent } from './home/locpiechart/locpiechart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './candidates/candidate/resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'addcandidate', component: AddcandidateComponent },
  { path: 'addjob', component: AddjobComponent },
  { path: 'candidates/candidate/:id', component: CandidateComponent },
  { path: 'jobs/job/:id', component: JobComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CandidatesComponent,
    JobsComponent,
    AbtsComponent,
    CtcusComponent,
    CandidateComponent,
    JobComponent,
    AddcandidateComponent,
    AddjobComponent,
    PiechartComponent,
    LinechartComponent,
    CanlinechartComponent,
    LocpiechartComponent,
    LoginComponent,
    NavbarComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MaterialFileInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    AlifeFileToBase64Module,
    NgxMaterialTimepickerModule,
    ChartsModule,
    MatCheckboxModule,
    MatStepperModule,
    NgxHorizontalTimelineModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    PdfViewerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UsersService,
    HeaderService,
    EnrollmentService,
    CommentService,
    EmployeeService,
    MatDatepickerModule,
    AngularFireDatabase,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
