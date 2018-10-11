import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { APPService } from './app.component.service';
import { detailViewComponent } from './detailView/detailView.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    detailViewComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [APPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
