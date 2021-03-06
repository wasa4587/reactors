/**
 ** @module reactors
 ** @flow
 **/

import Reactors from './API/Core';

export {Reactors as default};

export {default as Image} from './Component/Image';
export {default as Link} from './Component/Link';
export {default as ListView} from './Component/ListView';
export {default as ScrollView} from './Component/ScrollView';
export {default as Text} from './Component/Text';
export {default as View} from './Component/View';

export {default as Dimensions} from './API/Dimensions';
export {default as Gesture} from './API/Gesture';
// export {default as Notifications} from './API/Notifications';
export {default as Storage} from './API/Storage';
export {default as StyleSheet} from './API/StyleSheet';

const Platform = {OS: Reactors.getOS()};

export {Platform};
