import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './PaymentHome.component.html',
  styleUrl: './PaymentHome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentHomeComponent { }
