import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedData: Home;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')){return;}
      const barangId = paramMap.get('barangId');
      this.loadedData = this.homeService.getData(barangId);
    });
  }

}
