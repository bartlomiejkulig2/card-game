import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { appReducers } from './store/reducers/app.reducers';
import { DataStoreEffects } from './store/effects/data.effects';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { ResultComponent } from './components/result/result.component';
import { CardComponent } from './components/card/card.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { CardContainerComponent } from './components/card-container/card-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ResourcePickerComponent,
    ResultComponent,
    CardComponent,
    ActionButtonComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([DataStoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    MatButtonToggleModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
