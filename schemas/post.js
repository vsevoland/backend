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

    // Contents
    {
      name: 'content',
      title: 'Content',
      type: 'editor',
      fieldset: 'contents',
    },
  ],
}
