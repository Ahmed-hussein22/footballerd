import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

type NavItem = {
  label: string;
  icon: string;
  routerLink: string;
};

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  protected readonly sidebarOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'bi-speedometer2', routerLink: '/dashboard' },
    { label: 'Players', icon: 'bi-people', routerLink: '/players' },
    { label: 'Coaches', icon: 'bi-person-badge', routerLink: '/coaches' },
    { label: 'Teams', icon: 'bi-diagram-3', routerLink: '/teams' },
    { label: 'Finance', icon: 'bi-cash-coin', routerLink: '/finance' }
  ];

  protected readonly sidebarClass = computed(() =>
    this.sidebarOpen() ? 'erp-sidebar open' : 'erp-sidebar'
  );

  protected toggleSidebar(): void {
    this.sidebarOpen.update((v) => !v);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}

