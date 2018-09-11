import {Address} from './Address';

export class Order {
  id: number;
  date: Date;
  address: Address;
  dishes: number[];
}
