import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../../home';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  @Input() barang: Home;
  constructor() { }

  ngOnInit() {}

}
