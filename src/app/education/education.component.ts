import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {

  educationList:Education[]=[
    {
      institute: 'KK Wagh Art  Science and Commerce College Pimpalgaon B',
      course: 'MCS Master in Computer Science',
      duration: '2022-2024',
      score:'75%',
    },
    {
      institute: 'KK Wagh Art  Science and Commerce College Pimpalgaon B',
      course: 'BCS Bachers in Computer Science',
      duration: '2019-2022',
      score:'80 %',
    },
    
  ];
  
  constructor(){}
  ngOnInit(): void {
      
  }

}
