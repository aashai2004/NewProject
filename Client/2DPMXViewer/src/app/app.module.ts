import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {SplitterModule} from 'primeng/splitter';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PmxViewComponent } from './pmx-view/pmx-view.component';
import { AngularResizeEventModule } from 'angular-resize-event';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    PmxViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SplitterModule,
    AngularResizeEventModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
