import { Component } from '@angular/core';
import { Home } from './home';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  barangs: Home[];
  public displayMode = 1;
  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.barangs = this.homeService.getAllData();
  }

  ionViewWillEnter(){
    this.barangs = this.homeService.getAllData();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
