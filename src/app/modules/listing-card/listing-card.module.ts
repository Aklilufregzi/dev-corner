import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCardComponent } from './listing-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListingCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ListingCardComponent],
})
export class ListingCardModule {}
