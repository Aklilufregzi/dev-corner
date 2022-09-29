import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { ListingCardModule } from '../listing-card/listing-card.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MarketplaceComponent],
  imports: [CommonModule, ListingCardModule, IonicModule],

  exports: [MarketplaceComponent],
})
export class MarketplaceModule {}
