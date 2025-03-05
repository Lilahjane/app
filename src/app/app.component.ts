import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CardsComponent } from "../cards/cards.component";
@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    CardsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
