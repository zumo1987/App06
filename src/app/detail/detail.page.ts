import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  pro:any;
  constructor( private route:Router) {
    const navigation = this.route.getCurrentNavigation();
    this.pro = navigation?.extras?.state?.['i'];
   }

  ngOnInit() {
  }

}
