import { Component } from '@angular/core';
import { Dog } from '../model/dog';
import { Dogservice } from '../service/dogservice';

@Component({
  selector: 'app-user-dogs',
  templateUrl: './user-dogs.component.html',
  styleUrls: ['./user-dogs.component.css']
})
export class UserDogsComponent {
  dogs: Dog[] = []
  
  constructor(private dogService: Dogservice) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {this.dogs=data});
  }

}
