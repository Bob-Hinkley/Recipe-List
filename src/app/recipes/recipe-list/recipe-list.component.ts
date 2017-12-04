import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hamburger Recipe', 'Hamburger Testing',  'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Recipe('Pork Chop Recipe', 'Recipe for some Pork Chops',  'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
