import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterComponent } from '../filter/filter.component';
import { RecipeSService } from '../recipe-s.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-cards',
  imports: [
    MatButtonModule,
    MatCardModule, 
    FilterComponent
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  recipes: Recipe[] = [];
  minCalories?: number;
  maxCalories?: number;

  constructor(private recipeService: RecipeSService) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  updateMin(min: number) {
    this.minCalories = min;
    this.fetchRecipes();
  }

  updateMax(max: number) {
    this.maxCalories = max;
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipesByCalories(this.minCalories, this.maxCalories).subscribe(recipes => {
      this.recipes = recipes;
    });
  }
}
