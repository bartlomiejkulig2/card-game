import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectResource } from '../../store/selectors/config.selectors';
import { IAppState } from '../../models/IAppState';
import { pickedResourceChange } from '../../store/actions/config.actions';
import { Resource } from '../../models/Resource';



@Component({
  selector: 'app-resource-picker',
  templateUrl: './resource-picker.component.html',
  styleUrls: ['./resource-picker.component.scss']
})
export class ResourcePickerComponent {
  public Resource: typeof Resource = Resource;
  selectedValue$ = this.store.pipe(select(selectResource));


  constructor(private store: Store<IAppState>) { }


  onValueChange(resource: Resource): void {
    this.store.dispatch(pickedResourceChange({pickedResource: resource}));
  }
}
