import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Home } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private barang: Home[] = [
    {
      id: 'item1',
      type: 'Motherboard',
      imageUrl: 'https://static.bmdstatic.com/pk/product/medium/5b615493b8b5d.jpg',
      merk: 'MSI',
      model: 'MSI LGA2011 X99A SLI KRAIT',
      thread: '',
      size: '',
      boostClock: '',
      baseClock: '',
      core: '',
      speed: '',
      chipset: 'Intel X99`',
      compatible: [''],
      price: '5.277.000',
      stock: '21'
    },
    {
      id: 'item2',
      type: 'RAM',
      imageUrl: 'https://static.bmdstatic.com/pk/product/medium/CORSAIR-Memory-PC-2-x-8GB-DDR4-PC4-21300-Vengeance-RGB-CMR16GX4M2A2666C16--3317926032-201777164850.jpg',
      merk: 'Corsair',
      model: 'PC4-21300 DDR4 Vengeance RGB CMR16GX4M2A2666C16',
      thread: '',
      size: '2X8',
      baseClock: '',
      boostClock: '',
      core: '',      
      speed: '2133',
      chipset: '',
      compatible: [''],
      price: '3.130.000',
      stock: '23'
    },
    {
      id: 'item3',
      type: 'RAM',
      imageUrl: 'https://static.bmdstatic.com/pk/product/medium/5d54f9a61a712.jpg',
      merk: 'Corsair',
      model: 'PC4-25600 DDR4 Vengeance RGB Pro CMW16GX4M2C3200C16',
      thread: '',
      size: '2X8',
      baseClock: '',
      boostClock: '',
      core: '',
      speed: '',
      chipset: '',
      compatible: [''],
      price: '2.099.000',
      stock: '13'
    },
    {
      id: 'item4',
      type: 'CPU',
      imageUrl: 'https://media.pricebook.co.id/images/product/LL/77620_LL_1.jpg',
      merk: 'Intel',
      model: 'Intel Core i7-8700K',
      thread: '20',
      size: '',
      baseClock: '2.1',
      boostClock: '4.4',
      core: '10',
      speed: '3,7',
      chipset: '',
      compatible: [''],
      price: '4.869.000',
      stock: '3'
      },
    {
      id: 'item5',
      type: 'RAM',
      imageUrl: 'https://static.bmdstatic.com/pk/product/medium/MSI-Motherboard-Socket-LGA1151-Gaming-Pro-B150M--SKU14516005-2016127115815.jpg',
      merk: 'MSI',
      model: 'MSI Socket LGA1151 B150M Gaming Pro [911-7994-018]',
      thread: '',
      size: '',
      baseClock: '',
      boostClock: '',
      core: '',      
      speed: '',
      chipset: 'B150',
      compatible: [''],
      price: '1.629.000',
      stock: '8'
    },
    {
      id: 'item6',
      type: 'GPU',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/8/10/6558d1a7-e7f1-4079-901c-4b04a16b91b9.jpg',
      merk: 'NVIDIA',
      model: 'VGA AFOX NVIDIA GEFORCE GTX 1050 TI 4GB DDR5',
      thread: '',
      size: '4',
      baseClock: '',
      boostClock: '',
      core: '',
      speed: '3600',
      chipset: '',
      compatible: [''],
      price: '1.950.000',
      stock: '23'
    }
  ]

  constructor() { }

  getAllData(){
    return [...this.barang];
  }

  getAvailableData(){
    return {...this.barang.filter(barang=>{
      if(barang.stock !== '0'){
        return this.barang;
      }
    })}
  }

  getData(itemId: string){
    return {...this.barang.find(barang => {
      return barang.id === itemId;
    })}
  }

  deleteItem(itemId: string){
    this.barang = this.barang.filter(item => {
      return item.id !== itemId;
    })
  }

  editData(
    itemId:string,
    newImageUrl:string,
    newMerk:string,
    newModel:string,
    newPrice:string,
    newStock:string,
    newBaseClock:string,
    newBoostClock:string,
    newCore:string,
    newThread:string,
    newSize:string,
    newSpeed:string,
    newChipset:string,
    newCompatible:string[],
  ){
    length = this.barang.length;
    for(var i = 0; i < length; i++){
      if(this.barang[i].id == itemId){
        this.barang[i].imageUrl = newImageUrl;
        this.barang[i].merk = newMerk;
        this.barang[i].model = newModel;
        this.barang[i].price = newPrice;
        this.barang[i].stock = newStock;
        this.barang[i].baseClock = newBaseClock;
        this.barang[i].boostClock = newBoostClock;
        this.barang[i].core = newCore;
        this.barang[i].thread = newThread;
        this.barang[i].size = newSize;
        this.barang[i].speed = newSpeed;
        this.barang[i].chipset = newChipset;
        this.barang[i].compatible = newCompatible;
      }
    }
  }

  newItemId: string;
  addData(addedItem: Home){
    length = this.barang.length + 1;
    this.newItemId = 'item' + length;
    this.barang.push({
      id: this.newItemId,
      imageUrl: addedItem.imageUrl,
      merk: addedItem.merk,
      model: addedItem.model,
      price: addedItem.price,
      stock: addedItem.stock,
      type: addedItem.type,
      baseClock: addedItem.baseClock,
      boostClock: addedItem.boostClock,
      core: addedItem.core,
      thread: addedItem.thread,
      size: addedItem.size,
      speed: addedItem.speed,
      chipset: addedItem.chipset,
      compatible: addedItem.compatible
    });
  }
}