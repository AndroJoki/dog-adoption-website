import { Component } from '@angular/core';
import { Dog } from '../model/dog';
import { Dogservice } from '../service/dogservice';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent {
  dogs: Dog[] = []
  ageFinal: number = 0

  constructor(private dogService: Dogservice) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {this.dogs=data});
  } 

  add(name: string, breed: string, age: string, color: string, status: string, image: string): void {
    name = name.trim();
    breed = breed.trim();
    age = age.trim();
    color = color.trim();
    status = status.trim();
    image = image.trim();

    this.ageFinal = Number(age)

    if (!name || !breed || !this.ageFinal || !color || !status || !image) { return; }
    this.dogService.addDog({ name, breed, age, color, status, image } as unknown as Dog).subscribe(dog => {this.dogs.push(dog);});
    window.alert('A new dog has been added for adoption!');
  }
}
