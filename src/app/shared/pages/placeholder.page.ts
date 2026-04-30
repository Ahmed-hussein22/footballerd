import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  template: `
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <div class="text-secondary">Coming soon</div>
        <h1 class="h4 mb-2">{{ title() }}</h1>
        <p class="mb-0 text-secondary">
          This module will be implemented next (CRUD tables, filters, modals, and
          API services).
        </p>
      </div>
    </div>
  `
})
export class PlaceholderPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly title = computed(() => {
    const fromData = this.route.snapshot.data?.['title'];
    return typeof fromData === 'string' ? fromData : 'Module';
  });
}

