import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as p5 from 'p5';
import { Subscription } from 'rxjs';
import { PmxService } from '../pmx.service';
@Component({
  selector: 'app-pmx-view',
  templateUrl: './pmx-view.component.html',
  styleUrls: ['./pmx-view.component.css']
})
export class PmxViewComponent implements AfterViewInit {
  clickEventSubscription!:Subscription;
  canvas: any;
  sw = 2;
  c:any = [];
  strokeColor = 0;
  p5:any;
  sketch:any;
  width:number=0;
  height:number=0;
  canvas2:any;
  s:any;
  @ViewChild('renderCanvas') elementView!: ElementRef;
  @ViewChild('canvas',{static:true}) myCanvas!:ElementRef;
  constructor(private pmxService: PmxService)
  {
    this.clickEventSubscription =pmxService.getEvent().subscribe(()=>
    {
      this.drawCanvas();
    })
  }

  ngAfterViewInit()
  {

  }

  drawCanvas()
  {

    this.sketch = (s:p5) => {
      s.setup = () => {
        // let canvas2 = s.createCanvas(s.windowWidth-300 , s.windowHeight-20 );
        // canvas2.parent('renderCanvas');

        if(!this.canvas)
        {
          let canvas2 = s.createCanvas(s.windowWidth-300 , s.windowHeight-20 );
          canvas2.parent('renderCanvas');
          this.c[0] = s.color(148, 0, 211);
          s.strokeWeight(this.sw);
          s.stroke(this.c[this.strokeColor]);
        }
        // s.background(255);
        // s.background(0);

      };

      s.draw = () => {
        s.line(100,200,200,400);
        s.arc(50, 55, 50, 50, 0, s.HALF_PI);
        s.noFill();
        s.arc(50, 55, 60, 60, s.HALF_PI, s.PI);
        s.arc(50, 55, 70, 70, s.PI, s.PI + s.QUARTER_PI);
        s.arc(50, 55, 80, 80, s.PI + s.QUARTER_PI, s.TWO_PI);
        s.circle(300, 300, 200);

      };
      s.keyPressed = () => {
        if (s.key === 'c') {
          s.clear(0,0,0,0);
          s.erase();
          this.canvas = undefined;
          // window.location.reload();
        }
      };
    };

    this.canvas = new p5(this.sketch);
    console.log("Sketch",this.sketch);
  }

}


