import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ProductHome.component.html',
  styleUrl: './ProductHome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHomeComponent { }
