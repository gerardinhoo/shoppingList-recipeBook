import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from "./recipe.model"

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe(
      'French Fries',
      'Some amazing fries',
      'https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg',
      [
        new Ingredient('Fries', 1),
        new Ingredient('Fast food', 10)
      ]
    ),
    new Recipe(
      'Maccaronni',
      'Love this Macca',
      'https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093__480.jpg',
      [
        new Ingredient('Macca', 5),
        new Ingredient('Pasta', 15)
      ]
      )
  ];

  constructor(private shoppinglistService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients)
  }
}
