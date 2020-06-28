import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone , faMailBulk, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faLink = faLink;

  constructor() { }

  ngOnInit(): void {
  }

}
