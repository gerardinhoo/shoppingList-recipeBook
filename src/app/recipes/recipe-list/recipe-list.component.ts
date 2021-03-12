import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Dinho', 'What a baller he was', 'https://cdn.pixabay.com/photo/2016/06/22/18/34/soccer-1473669_1280.jpg')
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
