import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../model/dog';
import { Dogservice } from '../service/dogservice';

@Component({
  selector: 'app-user-dog',
  templateUrl: './user-dog.component.html',
  styleUrls: ['./user-dog.component.css']
})
export class UserDogComponent {
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

  adopt(): void {
    this.dogService.deleteDog(this.dog.id).subscribe();
    window.alert('The city vet office has been informed that this dog will be adopted!');
  }
}
