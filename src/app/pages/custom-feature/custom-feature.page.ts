import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { D3LineChartData } from "src/app/components/d3/d3-line-chart/d3-line-chart.component";

@Component({
  selector: "app-custom-feature",
  templateUrl: "./custom-feature.page.html",
  styleUrls: ["./custom-feature.page.scss"],
})
export class CustomFeaturePage implements OnInit {
  isLoading$ = new BehaviorSubject(true);

  data: Array<D3LineChartData> = [
    { name: "Dog A", value: 11 },
    { name: "Dog B", value: 24 },
    { name: "Dog C", value: 23 },
    { name: "Dog D", value: 23 },
  ];

  fillColor = "blue";

  constructor() {}

  ngOnInit() {
    this.isLoading$.next(false);
  }

  onlyCats() {
    this.isLoading$.next(true);

    setTimeout(() => {
      this.data = [
        { name: "Cat A", value: 11 },
        { name: "Cat B", value: 24 },
        { name: "Cat C", value: 23 },
        { name: "Cat D", value: 23 },
      ];

      this.fillColor = "red";

      this.isLoading$.next(false);
    }, 2000);
  }
}
