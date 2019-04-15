import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http:Http, private recipeService: RecipeService,
        private authService: AuthService){}

    storeRecipes(){
        let token = this.authService.getToken();
        return this.http.put(
            `https://http-8a947.firebaseio.com/recipes.json?auth=${token}`,
            this.recipeService.getRecipes()
        );   
    }

    getRecipes(){
        let token = this.authService.getToken();
        this.authService.getToken();

        this.http.get(
            `https://http-8a947.firebaseio.com/recipes.json?auth=${token}`
        )
        .map((response: Response)=>{
            const recipes: Recipe[] = response.json();
            for(let recipe of recipes){
                if(!recipe.ingredients){
                    recipe.ingredients = [];
                }
            }
            return recipes;
        })
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}