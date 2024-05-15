import { blogs } from '@/.velite';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';
import { Button } from '@/components/ui/button';

interface PostPageProps {
    params: {
        slug: string[];
    };
}
async function getPostFromParams(params: any) {
    const slug = params;
    const blog = blogs.find((blog) => blog.slugAsParams === slug);
    return blog;
}

const page = async ({ params: { slug } }: PostPageProps) => {
    const blog = await getPostFromParams(slug);
    if (!blog?.publish) {
        return notFound();
    }
    return (
        <article className="py-6 prose dark:prose-invert mx-auto">
            <h1>{blog.title}</h1>
            {blog.description ? (
                <p className="text-xl mt-0 text-muted-foreground">
                    {blog.description}
                </p>
            ) : null}
            <hr className="my-4" />
            {blog.tags.map((t) => (
                <Button variant="destructive" className="mx-1" key={t}>
                    {t}
                </Button>
            ))}
            <hr className="my-4" />
            <MDXContent code={blog.body} />
        </article>
    );
};
export default page;
