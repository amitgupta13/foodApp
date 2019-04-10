import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Recipe 1', 
          'First Recipe for our test', 
          'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg',
          [
            new Ingredient('meat', 1),
            new Ingredient('bread', 6)
          ]
        ),
        new Recipe(
          'Recipe 2', 
          'Second Recipe for our test', 
          'https://newsroom.unsw.edu.au/sites/default/files/styles/full_width/public/thumbnails/image/5_junk_food_shutterstock_1.jpg?itok=X29w4W_j',
          [
            new Ingredient('buns', 2),
            new Ingredient('steak', 4)
          ]
        )
      ];

      constructor(private slService: ShoppingListService){}
      
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
}