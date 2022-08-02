"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Posts = {
    slug: 'posts',
    admin: {
        defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'publishedDate',
            type: 'date',
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories'
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
        },
        {
            name: 'content',
            type: 'richText'
        },
        {
            name: 'status',
            type: 'select',
            options: [
                {
                    value: 'draft',
                    label: 'Draft',
                },
                {
                    value: 'published',
                    label: 'Published',
                },
            ],
            defaultValue: 'draft',
            admin: {
                position: 'sidebar',
            }
        }
    ],
};
exports.default = Posts;
