import { createAction, props } from '@ngrx/store';

import { Resource } from '../../models/Resource';



export const pickedResourceChange = createAction(
  '[Config Action] pickedResourceChange',
  props<{ pickedResource: Resource; }>()
);
