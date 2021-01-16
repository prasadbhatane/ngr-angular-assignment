import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // comment unwanted case and uncomment other case to see the results
  // use this for users available case 1
  users : User[] = [
    {name:'Prasad Bhatane', username:'prasadbhatane', email:'prasadbhatane701@gmail.com'},
    {name:'Tony Stark', username:'tonystark', email:'tonystark@gmail.com'},
    {name:'Sheldon Cooper', username:'seldoncooper', email:'seldoncooper@gmail.com'},
    {name:'Damon Salvatore', username:'dsalvator', email:'damon@gmail.com'}
  ]

  // use this for no users available case 2
  // users : User[] = []

}
