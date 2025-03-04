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
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
recipecards: Recipe[] = [];
  constructor(private recipeService: RecipeSService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipecards = recipes;
    });
  }
}
