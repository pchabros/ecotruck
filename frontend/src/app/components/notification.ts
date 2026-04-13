import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  template: `<div class="flex w-full h-full justify-center items-center" [style]="style()">
    {{ message() }}
  </div>`,
})
export class Notification {
  message = input.required<string>();
  minHeight = input<number>();

  style = computed(() => ({ minHeight: `${this.minHeight()}px` }));
}
