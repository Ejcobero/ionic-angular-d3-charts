import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as d3 from "d3";
import { BehaviorSubject } from "rxjs";

export type D3LineChartData = {
  name: string;
  value: string | number;
};

function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

@Component({
  selector: "app-d3-line-chart",
  templateUrl: "./d3-line-chart.component.html",
  styleUrls: ["./d3-line-chart.component.scss"],
})
export class D3LineChartComponent implements OnInit, AfterViewInit {
  public toggle$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private _svgElementId: string = makeId(64);

  private _data: Array<D3LineChartData> = [
    { name: "Vue", value: 166443 },
    { name: "React", value: 150793 },
    { name: "Angular", value: 62342 },
    { name: "Backbone", value: 27647 },
    { name: "Ember", value: 21471 },
  ];

  private _fillColor: string = "#d04a35";

  private _svg: any;

  private _margin = 50;

  private _width = window.innerWidth - this._margin * 2;

  private _height = 400 - this._margin * 2;

  @Input() set data(value: Array<D3LineChartData>) {
    this._data = value;
  }

  @Input("fill-color") set fillColor(value: string) {
    this._fillColor = value;
  }

  @ViewChild("d3LineChart") d3LineChart: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.render();
  }

  render(): void {
    this.createSvg();
    this.draw(this._data);
  }

  createSvg() {
    const width = this._width + this._margin * 2;
    const height = this._height + this._margin * 2;

    this._svg = d3
      .select("figure#line")
      .append("svg")
      .attr("id", this._svgElementId)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${this._margin}, ${this._margin})`);
  }

  draw(data: any[]) {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this._width])
      .domain(data.map((d) => d.name))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this._svg
      .append("g")
      .attr("transform", "translate(0," + this._height + ")")
      .call(d3.axisBottom(x))
      .attr("font-size", "24px")
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-0)")
      .style("text-anchor", "end");

    const allValues = this._data.map((d) => Number(d.value));
    const maxValue = Math.max(...allValues);

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, maxValue]).range([this._height, 0]);

    // Draw the Y-axis on the DOM
    this._svg.append("g").call(d3.axisLeft(y));

    // Create and fill the bars
    this._svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this._height - y(d.value))
      .attr("fill", this._fillColor);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    // console.log(event.target.innerWidth, this.d3LineChart);

    const innerWidth = String(
      Number(event.target.innerWidth) - this._margin * 2
    );

    // this.d3LineChart.nativeElement.style.width = innerWidth;

    document
      .querySelector(`figure#line > svg[id="${this._svgElementId}"]`)
      .setAttribute("width", innerWidth);

    // document
    //   .querySelector(`svg[id="${this._svgElementId}"] > text`)
    //   .setAttribute("dy", "24px");

    // console.log(this._svg)

    // this._svg.attr("font-size", "6px");

    const newWidth = d3.select("svg").style("width");
    const newFontSize = 10 * (600 / parseInt(newWidth));
    d3.selectAll(".tick").select("text").style("font-size", "120px");
  }
}
