import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import editor from './editor'
import page from './books/page'
import spread from './books/spread'
import chapter from './books/chapter'
import cover from './books/cover'
import volume from './books/volume'
import book from './books/book'
import post from './blog/post'
import category from './blog/category'
import label from './blog/label'
import code from './embeds/code'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    editor,
    page,
    spread,
    chapter,
    cover,
    volume,
    book,
    post,
    category,
    label,
    code,
  ]),
})
