import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../models/Dish';
import {DishService} from '../services/dish.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = this.route.snapshot.paramMap.get('id');
    /*this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);*/
  }

}
