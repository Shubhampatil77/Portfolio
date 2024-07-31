import { Component, Directive, ElementRef, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from "./baner/baner.component";
import { EducationComponent } from "./education/education.component";
import { SkillComponent } from "./skill/skill.component";
import { ResponsiveDirective } from './directives/responsive.directive';
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { WorkExperinaceComponent } from "./work-experinace/work-experinace.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, BanerComponent, EducationComponent, SkillComponent, ResponsiveDirective, PersonalInformationComponent, WorkExperinaceComponent, ProjectsComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;
  
  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcMode= false;
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcMode=true;
              }
            }
          }
        },
      });
  }
}
