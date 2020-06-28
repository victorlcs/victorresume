import { faHtml5, faCss3, faAngular } from '@fortawesome/free-brands-svg-icons';
import {faQuestionCircle, faDatabase, faFileCsv, faFileWord, faCode } from '@fortawesome/free-solid-svg-icons';

export class ResumeService {
  faQuestionCircle = faQuestionCircle;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faAngular = faAngular;
  faDatabase = faDatabase;
  faFileCsv = faFileCsv;
  faFileWord = faFileWord;
  faCode = faCode;
  mySkills = [
    {
      icon : faQuestionCircle,
      desc : 'Proprietary Programming Language',
      level : '85'
    },
    {
      icon : faHtml5,
      desc : 'HTML 5',
      level : '50'
    },
    {
      icon : faCss3,
      desc : 'CSS 3',
      level : '50'
    },
    {
      icon : faCode,
      desc : 'C#',
      level : '40'
    },
    {
      icon : faAngular,
      desc : 'Angular',
      level : '40'
    },
    {
      icon : faDatabase,
      desc : 'MSSQL ',
      level : '40'
    },
    {
      icon : faFileCsv,
      desc : 'Miscrosoft Excel',
      level : '75'
    },
    {
      icon : faFileWord,
      desc : 'Miscrosoft Words',
      level : '70'
    },
  ]
}
