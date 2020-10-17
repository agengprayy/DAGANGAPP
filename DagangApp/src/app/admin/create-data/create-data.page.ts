import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Home } from 'src/app/home/home';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.page.html',
  styleUrls: ['./create-data.page.scss'],
})
export class CreateDataPage implements OnInit {
  form: NgForm;
  barang: Home[];
  type: string;
  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.barang = this.homeService.getAllData();
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const imageUrl = form.value.imageUrl;
    const merk = form.value.merk;
    const model = form.value.model;
    const price = form.value.price;
    const stock = form.value.stock;
    const type = form.value.type;
    const baseClock = form.value.baseClock;
    const boostClock = form.value.boostClock;
    const core = form.value.core;
    const thread = form.value.thread;
    const size = form.value.size;
    const speed = form.value.speed;
    const chipset = form.value.chipset;
    const compatible = form.value.compatible;
    
    console.log(imageUrl, merk, model, price, stock, type, baseClock, boostClock,
      core, thread, size, speed, chipset, compatible);
  
    this.homeService.addData(form.value);
    this.router.navigate(['/admin']);
  }

}
