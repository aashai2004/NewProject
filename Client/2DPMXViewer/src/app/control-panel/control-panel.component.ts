import { Component } from '@angular/core';
import { PmxService } from '../pmx.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  constructor(private pmxService:PmxService) { }
  drawPMX()
  {
    this.pmxService.sendClickEvent();
  }
}
