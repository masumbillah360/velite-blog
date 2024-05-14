import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePretteyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
    name: 'Post',
    pattern: 'posts/**/*.mdx',
    schema: s
        .object({
            slug: s.path(), // auto generate slug from file path
            title: s.string().max(99), // Zod primitive type
            description: s.string().max(909), // Zod primitive type
            date: s.isodate(), // input Date-like string, output ISO Date string.
            publish: s.boolean().default(true),
            body: s.mdx(),
        })
        .transform(computedFields),
});
export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePretteyCode, { theme: 'github-dark' }],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    },
                },
            ],
        ],
        remarkPlugins: [],
    },
});
