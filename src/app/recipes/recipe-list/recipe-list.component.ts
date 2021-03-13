import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Dinho', 'What a baller he was', 'https://cdn.pixabay.com/photo/2016/06/22/18/34/soccer-1473669_1280.jpg'),
    new Recipe('Robinho', 'Brazilian', 'https://cdn.pixabay.com/photo/2016/06/22/18/34/soccer-1473669_1280.jpg')
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
