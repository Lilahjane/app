import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeSService {

  constructor(private http: HttpClient) { }

  // Updated: No filters or pagination needed anymore
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/api/recipes');  // No query parameters
  }

  getRecipeNames(): Observable<string[]> {
    return this.http.get<string[]>('/api/recipe-names');
  }
// create a query for the min and max calories
 // getRecipesByCalories(minCalories: number, maxCalories: number): Observable<Recipe[]> {}
//but min and max should be 2 sperate requests I think because if  all the queires are 
getRecipesByCalories(minCalories?: number, maxCalories?: number): Observable<Recipe[]> {
  let params = new HttpParams();
  
  if (minCalories !== undefined) {
    params = params.set('min_calories', minCalories.toString());
  }
  if (maxCalories !== undefined) {
    params = params.set('max_calories', maxCalories.toString());
  }

  return this.http.get<Recipe[]>('/api/recipes', { params });
}

  // Get ingredients for a specific recipe
  getIngredientsForRecipe(recipeId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/ingredients/${recipeId}`);
  }
}


