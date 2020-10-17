import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../../home';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() barang: Home;
  constructor() { }

  ngOnInit() {}

}
