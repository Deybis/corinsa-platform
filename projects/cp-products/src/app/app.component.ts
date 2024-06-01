import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductHomeComponent } from './ProductHome/ProductHome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cp-products';
}
