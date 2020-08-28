import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'andres-store';
  items = ['andres', 'yuliana', 'Maria Paz'];

  power = 10;

  addItem() {
    this.items.push('Nuevo Item');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
