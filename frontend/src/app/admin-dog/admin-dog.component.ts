import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../model/dog';
import { Dogservice } from '../service/dogservice';

@Component({
  selector: 'app-admin-dog',
  templateUrl: './admin-dog.component.html',
  styleUrls: ['./admin-dog.component.css']
})

export class AdminDogComponent implements OnInit {
  dog: Dog = new Dog()

  constructor(private dogService:Dogservice, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if(params ['id'] !== undefined) {
        const id = params['id'];
        this.dogService.getDog(id).subscribe(data => {this.dog=data})
      }
    })
  }

  save(name: string, breed: string, age: string, color: string, status: string, image: string): void {
    this.dog.name = name
    this.dog.breed = breed
    this.dog.age = Number(age)
    this.dog.color = color
    this.dog.status = status
    this.dog.image = image

    if (this.dog) {
      this.dogService.updateHero(this.dog).subscribe();
      window.alert('Data has been saved!');
    }
  }
  
} 
       
