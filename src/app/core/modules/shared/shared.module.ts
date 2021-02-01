import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { D3LineChartComponent } from "src/app/components/d3/d3-line-chart/d3-line-chart.component";
import { DogComponent } from "src/app/components/dog/dog.component";
import { CatComponent } from "src/app/components/cat/cat.component";

@NgModule({
  declarations: [D3LineChartComponent, DogComponent, CatComponent],
  imports: [CommonModule],
  exports: [D3LineChartComponent, DogComponent, CatComponent],
})
export class SharedModule {}
