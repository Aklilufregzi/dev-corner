import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Full Name',
      url: '/folder/Inbox',
      icon: 'person',
      slot: 'start',
      divide: false,
    },
    {
      title: 'Account Settings',
      url: '/folder/Outbox',
      icon: 'settings',
      slot: 'end',
      divide: false,
    },
    {
      title: 'Billing',
      url: '/folder/Outbox',
      icon: 'podium-outline',
      slot: 'end',
      divide: true,
    },
    {
      title: 'Messaging',
      url: '/folder/Outbox',
      icon: 'chatbubbles',
      slot: 'end',
      divide: true,
    },
    {
      title: 'Marketplace',
      url: '/folder/marketplace',
      icon: 'storefront-outline',
      slot: 'end',
      divide: false,
    },
    {
      title: 'Bid History',
      url: '/folder/Outbox',
      icon: 'refresh-circle',
      slot: 'end',
      divide: false,
    },
    {
      title: 'Active Bids',
      url: '/folder/Outbox',
      icon: 'flash-outline',
      slot: 'end',
      divide: true,
    },

    {
      title: 'Sign Out',
      url: '/folder/Outbox',
      icon: 'log-out-outline',
      slot: 'end',
      divide: false,
    },
  ];
  constructor() {}
}
