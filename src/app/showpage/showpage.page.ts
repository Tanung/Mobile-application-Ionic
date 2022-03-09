import { News } from 'src/app/dbhome/News';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { Student } from '../shared/student';
import { NewsService } from 'src/app/dbhome/NewsService';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.page.html',
  styleUrls: ['./showpage.page.scss'],
})
export class ShowpagePage implements OnInit {
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

    async presentConfirmDelete(delid: any) {
      const alert = this.alertCtrl.create({
        subHeader: 'ลบ', // Header
        message: 'คุณต้องการลบหรือไม่',
        buttons: [
          {
            text: 'ลบ',
            handler: () => {
              //console.log('Buy clicked');

              this.apiservice.deleteUser(delid);
            }
          },
          {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      (await alert).present();
    }

    //async presentPromptEdit(id, name, age, address) {
      async presentPromptEdit(tmpobj) {
      const alert = this.alertCtrl.create({
        subHeader: 'แก้ไข',
        message: 'คุณกำลังเเก้ไข'+name,
        inputs: [
          {
            name: 'title',
            //placeholder: name,
            value: tmpobj.title
          },
          {
            name: 'linkimg',
            //placeholder: age,
            value: tmpobj.linkimg
          },
          {
            name: 'detail',
            //placeholder: age,
            value: tmpobj.detail
          },
          {
            name: 'linkurl',
            //placeholder: address,
            value: tmpobj.linkurl
          }
        ],
        buttons: [
          {
            text: 'เเก้ไข',
            handler: data => {
              const updatedata = {};
               updatedata['title'.toString()] = data.title;
               updatedata['linkimg'.toString()] = data.linkimg;
               updatedata['detail'.toString()] = data.detail;
               updatedata['linkurl'.toString()] = data.linkurl;
               ///this.ngFirestore.doc('/Student/'+id).update(updatedata);
               this.apiservice.updateUser(tmpobj.id, updatedata);
               console.log(updatedata);
            }
          },
          {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      (await alert).present();
    }

}
