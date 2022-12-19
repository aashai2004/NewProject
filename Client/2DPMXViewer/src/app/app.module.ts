import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitterModule} from 'primeng/splitter';
import { PmxViewerComponent } from './pmx-viewer/pmx-viewer.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LineService } from './line.service';

@NgModule({
  declarations: [
    AppComponent,
    PmxViewerComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SplitterModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  providers: [LineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
