import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dog } from '../model/dog';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable ({providedIn: 'root'})
export class Dogservice {
    dogsUrl: string

    constructor(private http: HttpClient) {
        this.dogsUrl = 'http://localhost:18080/api';
    }

    public getDogs(): Observable<Dog[]> {
        return this.http.get<Dog[]>(this.dogsUrl + '/dogs/');
    }
    
    public getDog(id: number): Observable<Dog> {
        return this.http.get<Dog>(this.dogsUrl + '/show-dog/' + id.toString());
    }

    addDog(dog: Dog): Observable<Dog> {
        return this.http.post<Dog>(this.dogsUrl + '/add-dog/', dog);
    }

    deleteDog(id: number): Observable<Dog> {
    
        return this.http.delete<Dog>(this.dogsUrl + '/delete-dog/' + id.toString());
    }

    updateHero(dog: Dog): Observable<any> {
        return this.http.put(this.dogsUrl + '/update-dog/' + dog.id.toString(), dog);
    }
    
}
