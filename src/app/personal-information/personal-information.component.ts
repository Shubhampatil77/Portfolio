import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit {
myData: String[][]=[
  ['Name','Shubham Patil'],
  ['DOB','12/03/2001'],
  ['Work Exp','6 Month'],
  ['Education','MCS'],
  ['Interests','Trakking, Gardening']
];

aboutMe: string[]=[
  'Hi',
'I hope youre well. My name is Shubham Patil, and I recently completed my Master in Computer Science and an Angular internship at Application Square Infotech. I actively seeking a full-time position in Angular or full-stack web development (Java and Angular) and am available to join immediately',
'I would appreciate any information on relevant job opportunities. Thank you for your time',
'Best regards',  
'Shubham Patil',
]
constructor(){}
    ngOnInit(): void {
        
    }

}
