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

  // Get ingredients for a specific recipe
  getIngredientsForRecipe(recipeId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/ingredients/${recipeId}`);
  }
}
