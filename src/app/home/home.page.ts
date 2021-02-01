import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { D3LineChartData } from "../components/d3/d3-line-chart/d3-line-chart.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data: Array<D3LineChartData> = [
    { name: "Les Paul", value: "15" },
    { name: "Stratosphere", value: "25" },
    { name: "Acoustic Guitar", value: "30" },
    { name: "Bass", value: "12" },
    { name: "Ukele", value: "14" },
  ];

  constructor(private router: Router) {}

  goToCustomFeaturePage() {
    this.router.navigate(['/custom-feature'])
  }
}
