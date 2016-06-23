/**
  * @module reactors
  * @name Gesture
  * @type Class
  * @flow
**/

import Reactors from 'reactors';

export default class Gesture {
  static handlers(props: Object) {
    const clone_props = {...props};
    switch (Reactors.platform) {
    case 'mobile':
      return clone_props;
    default:
      if (clone_props.onPress) {
        clone_props.onClick = clone_props.onPress;
      }
      return clone_props;
    }
  }
}