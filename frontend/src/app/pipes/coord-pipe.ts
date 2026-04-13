import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coord',
})
export class CoordPipe implements PipeTransform {
  transform(value: number, type: 'lat' | 'lon'): string {
    const absolute = Math.abs(value);
    const degrees = Math.floor(absolute);
    const minutes = (absolute - degrees) * 60;
    const direction = this.getDirection(value, type);

    return `${degrees}° ${minutes.toFixed(3)}' ${direction}`;
  }

  private getDirection(value: number, type: 'lat' | 'lon'): string {
    if (type === 'lat') {
      return value >= 0 ? 'N' : 'S';
    } else {
      return value >= 0 ? 'E' : 'W';
    }
  }
}
