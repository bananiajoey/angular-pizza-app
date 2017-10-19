import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @Input() order: any;

  constructor() { }

  ngOnInit() {
  }

}
