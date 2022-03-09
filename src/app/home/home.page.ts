import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  s1: string;
  s2: string;

  constructor(public acroute: ActivatedRoute) {}

  ngOnInit(){
    const result = this.acroute.snapshot.paramMap.get('dataobj');
    const parseResult = JSON.parse(result);
    this.s1 = parseResult.myname;
    this.s2 = parseResult.mypwd;
  }
}
