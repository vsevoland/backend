export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'contents', title: 'Contents'},
  ],
  fields: [
    // Main
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'main',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'main',
      options: {source: 'title'},
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      fieldset: 'main',
      to: {type: 'category'},
    },
    {
      name: 'labels',
      title: 'Labels',
      type: 'array',
      fieldset: 'main',
      of: [{type: 'reference', to: [{type: 'label'}]}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'main',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      fieldset: 'main',
      validation: Rule => Rule.required(),
    },
    {
      name: 'redirect',
      title: 'Redirect',
      type: 'string',
      fieldset: 'main',
    },

    // Contents
    {
      name: 'content',
      title: 'Content',
      type: 'editor',
      fieldset: 'contents',
    },
  ],
}
