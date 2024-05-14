import { posts } from '@/.velite';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import React from 'react';

interface PostPageProps {
    params: {
        slug: string[];
    };
}
async function getPostFromParams(params: any) {
    console.log('Params -> ', params);
    const slug = params;
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
}

const page = async ({ params: { slug } }: PostPageProps) => {
    const post = await getPostFromParams(slug);
    if (!post || !post.publish) {
        return notFound();
    }
    return (
        <article className="container py-6 prose dark:prose-invert mx-auto">
            <h1>{post.title}</h1>
            {post.description ? (
                <p className="text-xl mt-0 text-muted-foreground">
                    {post.description}
                </p>
            ) : null}
            <hr className="my-4" />
            <MDXContent code={post.body} />
        </article>
    );
};
export default page;
