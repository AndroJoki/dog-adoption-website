import { Component } from '@angular/core';
import { Dog } from '../model/dog';
import { Dogservice } from '../service/dogservice';

@Component({
  selector: 'app-admin-dogs',
  templateUrl: './admin-dogs.component.html',
  styleUrls: ['./admin-dogs.component.css']
})
export class AdminDogsComponent {
  dogs: Dog[] = []
  
  constructor(private dogService: Dogservice) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {this.dogs=data});
  }

  delete(dog: Dog): void {
    this.dogs = this.dogs.filter(d => d !== dog);
    this.dogService.deleteDog(dog.id).subscribe();
    window.alert('A dog record has been deleted!');
  }
}
