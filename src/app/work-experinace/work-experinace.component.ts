import { Component, OnInit } from '@angular/core';
import { WorkExperinace } from '../Models/Models'; // Ensure the correct path to the model
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-work-experinace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experinace.component.html',
  styleUrl: './work-experinace.component.css'
})
export class WorkExperinaceComponent implements OnInit{
  workExpList: WorkExperinace[] = [
    {
    role:'Angular Developer Intern',
    company:'Application Square Infotech',
    duration:'Jan 2024 - Jun 2024',
    description:[
      'Worked With the Multipl temasdsnjvnjnvj dsckjnjcndscndsncsd',
      'sdvdvnmvdkv jndfvjdf jkd dfkj dfjj fj fj  kdf  j  j '
    ],
  },
];
  constructor(){}
  ngOnInit(): void {}
}
