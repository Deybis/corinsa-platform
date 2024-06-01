import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentHomeComponent } from './PaymentHome/PaymentHome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaymentHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cp-payment';
}
