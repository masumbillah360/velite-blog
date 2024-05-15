import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePretteyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const blogs = defineCollection({
    name: 'Post',
    pattern: 'blogs/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            subTitle: s.string().max(200),
            date: s.isodate(),
            tags: s.array(s.string()),
            description: s.string().max(500),
            publish: s.boolean().default(true),
            thumbnail: s.string(),
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
    collections: { blogs },
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
