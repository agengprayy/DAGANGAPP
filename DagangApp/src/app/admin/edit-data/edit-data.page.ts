import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { Home } from 'src/app/home/home';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {
  loadedData: Home;
  barangs: Home[];
  form: FormGroup;

  newImageUrl: string;
  newMerk: string;
  newModel: string;
  newPrice: string;
  newStock: string;
  newThread: string;
  newSize: string;
  newBaseClock: string;
  newBoostClock: string;
  newCore: string;
  newSpeed: string;
  newChipset: string;
  newCompatible: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('barangId')) {return;}
      const barangId = paramMap.get('barangId');
      this.loadedData = this.homeService.getData(barangId);

      this.newImageUrl = this.loadedData.imageUrl;
      this.newMerk = this.loadedData.merk;
      this.newModel = this.loadedData.model;
      this.newPrice = this.loadedData.price;
      this.newStock = this.loadedData.stock;
      this.newThread = this.loadedData.thread;
      this.newSize = this.loadedData.size;
      this.newBaseClock = this.loadedData.baseClock;
      this.newBoostClock = this.loadedData.boostClock;
      this.newCore = this.loadedData.core;
      this.newSpeed = this.loadedData.speed;
      this.newChipset = this.loadedData.chipset;
      this.newCompatible = this.loadedData.compatible;
    });
  }

  async alertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Edit data',
      message: 'Are you sure to modify this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  onSubmit(){
    this.homeService.editData(
      this.loadedData.id,
      this.newImageUrl,
      this.newMerk,
      this.newModel,
      this.newPrice,
      this.newStock,
      this.newBaseClock,
      this.newBoostClock,
      this.newCore,
      this.newThread,
      this.newSize,
      this.newSpeed,
      this.newChipset,
      this.newCompatible,
    );
    this.router.navigate(['./admin'])
  }

}
