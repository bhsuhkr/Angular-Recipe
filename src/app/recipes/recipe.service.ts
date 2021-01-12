import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes-list/recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'just awesome!', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg',[
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'Good~', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg',[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice(); // only returns the copy of the recipe, not the pointer/reference to it
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}