import { Component, OnInit } from '@angular/core';

export interface Skill {
  nama: string;
}

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.scss']
})
export class SkillsComponentComponent implements OnInit {

  softSkills: Skill[] = [
    {
      nama: 'Riset'
    },
    {
      nama: 'Kolaborasi'
    },
    {
      nama: 'Motivasi diri'
    },
    {
      nama: 'Kemauan untuk belajar'
    },
    {
      nama: 'Empati'
    },
    {
      nama: 'Manajemen Waktu'
    },
    {
      nama: 'Berfikir Kritis'
    }
  ];

  hardSkills: Skill[] = [
    {
      nama: 'User Research'
    },
    {
      nama: 'Design Thinking'
    },
    {
      nama: 'Visual Design'
    },
    {
      nama: 'Interaction Design'
    },
  ]

  ESoftware: Skill[] = [
    {
      nama: 'Microsoft Office'
    },
    {
      nama: 'Google Drive'
    },
    {
      nama: 'Social Media'
    },
  ]

  UIUX: Skill[] = [
    {
      nama: 'Figma'
    },
  ]

  GraphicDesign: Skill[] = [
    {
      nama: 'Adobe Photoshop (Basic)'
    },
    {
      nama: 'Adobe Illustrator (Basic)'
    },
    {
      nama: 'Canva (Intermediate)'
    },
  ]

  Programming: Skill[] = [
    {
      nama: 'HTML5 (Intermediate)'
    },
    {
      nama: 'CSS3 (Intermediate)'
    },
    {
      nama: 'Javascript (Intermediate)'
    },
    {
      nama: 'Angular +7 (Intermediate)'
    },
    {
      nama: 'Blazor Wasm (Basic)'
    },
    {
      nama: 'C# (Basic)'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
