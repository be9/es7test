import 'babel-polyfill';

import { foo } from './foo';

for (let v of foo()) {
    console.log(v);
}
