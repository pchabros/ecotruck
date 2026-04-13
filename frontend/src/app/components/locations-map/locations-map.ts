import { Component, input, effect, viewChild, ElementRef, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Map, LayerGroup, tileLayer, map as leafletMap, layerGroup, marker } from 'leaflet';
import { Telemetry } from '../../dto/telemetry.dto';

@Component({
  selector: 'app-locations-map',
  imports: [MatButtonToggleModule],
  templateUrl: './locations-map.html',
})
export class LocationsMap {
  selected = input<Telemetry | undefined>();

  private mapDiv = viewChild.required<ElementRef>('map');
  private map = signal<Map | null>(null);
  private markersLayer = signal<LayerGroup | null>(null);

  private layers = {
    street: tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    topo: tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'),
    dark: tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'),
    satellite: tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    ),
  };
  protected layersOptions = Object.keys(this.layers);

  initMap = effect(() => {
    const el = this.mapDiv()?.nativeElement;
    if (el && !this.map()) {
      const map = leafletMap(el).setView([52, 19.5], 6);
      this.layers.street.addTo(map);
      this.map.set(map);
      this.markersLayer.set(layerGroup().addTo(map));
    }
  });

  updateMarker = effect(() => {
    const selected = this.selected();
    if (!selected) return;
    const layer = this.markersLayer();
    layer?.clearLayers();
    marker([selected.latitude, selected.longitude])
      .bindPopup(
        [
          `Time: ${selected.timestamp}`,
          `Speed: ${selected.speed}km\h`,
          `Mileage: ${selected.mileage}km`,
        ].join('<br>'),
      )
      .addTo(layer!);
    const map = this.map();
    if (map) map.setView([selected.latitude, selected.longitude], 15);
  });

  changeLayer(name: string) {
    const map = this.map();
    if (!map) return;
    Object.values(this.layers).forEach((l) => map.removeLayer(l));
    this.layers[name as keyof typeof this.layers].addTo(map);
  }
}
