import { News } from './News';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { Student } from '../shared/student';
import { NewsService } from './NewsService';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'dbhome.page.html',
  styleUrls: ['dbhome.page.scss'],
})

export class DbhomePage implements OnInit {
  newsobj: any;
  constructor(private apiservice: NewsService, private alertCtrl: AlertController,
    private router: Router, private ngFirestore: AngularFirestore) { }

  ngOnInit() {
    this.apiservice.getData().subscribe((res) => {
      this.newsobj = res.map((t) => ({
          id: t.payload.doc.id,
          title: t.payload.doc.data()['title'.toString()],
          linkimg: t.payload.doc.data()['linkimg'.toString()],
          detail: t.payload.doc.data()['detail'.toString()],
          linkurl: t.payload.doc.data()['linkurl'.toString()]
        }));
        console.log(this.newsobj);
      });

    }//method

    async presentPromptAdd() {
      const alert = this.alertCtrl.create({
        subHeader: 'เพิ่มข่าว',
        inputs: [
          {
            name: 'title',
            placeholder: 'หัวข้อข่าว'
          },
          {
            name: 'linkimg',
            placeholder: 'ลิงค์รูปภาพ'
          },
          {
            name: 'detail',
            placeholder: 'รายละเอียด'
          },
          {
            name: 'linkurl',
            placeholder: 'link url'
          }
        ],
        buttons: [
          {
            text: 'เพิ่ม',
            handler: data => {
              const tmpdata = {};
               tmpdata['title'.toString()] = data.title;
               tmpdata['linkimg'.toString()] = data.linkimg;
               tmpdata['detail'.toString()] = data.detail;
               tmpdata['linkurl'.toString()] = data.linkurl;
                  this.apiservice.createUser(tmpdata);
                  console.log(tmpdata);
            }
          },
          {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
        ]
      });
      (await alert).present();
    }

}//class
