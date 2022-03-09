import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowpagePage } from './showpage.page';
import { News } from 'src/app/dbhome/News';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { Student } from '../shared/student';
import { NewsService } from 'src/app/dbhome/NewsService';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ShowpagePage', () => {
  let component: ShowpagePage;
  let fixture: ComponentFixture<ShowpagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
