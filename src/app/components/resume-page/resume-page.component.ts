import { ResumeService } from './../resume.service';
import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone , faMailBulk, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
  providers: [ResumeService]
})
export class ResumePageComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faLink = faLink;
  mySkills: any = [];
  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.mySkills = this.resumeService.mySkills;
  }

  onClickGit() {
    window.open('https://github.com/victorlcs', '_blank');
  }
}
