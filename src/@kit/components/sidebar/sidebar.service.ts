import { Injectable } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Private
  private _registry: { [key: string]: SidebarComponent } = {};

  constructor() { }

  register(key, sidebar): void {
    // Check if the key already being used
    if ( this._registry[key] ) {
      console.error(`The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`);

      return;
    }

    // Add to the registry
    this._registry[key] = sidebar;
  }

  unregister(key): void {
    // Check if the sidebar exists
    if ( !this._registry[key] ) {
      console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);
    }

    // Unregister the sidebar
    delete this._registry[key];
  }

  getSidebar(key): SidebarComponent {
    // Check if the sidebar exists
    if ( !this._registry[key] ) {
      console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);

      return;
    }

    // Return the sidebar
    return this._registry[key];
  }

}
