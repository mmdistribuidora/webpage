import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import gallery from './gallery';
import category from './category';
import company from './company';
import features from './features';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    product,
    banner,
    gallery,
    category,
    company,
    features,
  ]),
})
