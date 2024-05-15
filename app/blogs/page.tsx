import React from 'react';

import { blogs } from '@/.velite';
import PostCard from '@/components/cards/postCard';
import QueryPagination from '@/components/query-pagination';

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

const page = ({ searchParams }: BlogPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const BLOG_PER_PAGE = 6;
    const totalCount = Math.ceil(blogs.length / BLOG_PER_PAGE);
    const disPlayPosts = blogs.slice(
        BLOG_PER_PAGE * (currentPage - 1),
        BLOG_PER_PAGE * currentPage
    );

    return (
        <section className="mx-auto flex flex-col justify-center items-center gap-6">
            {disPlayPosts.map(
                (
                    {
                        title,
                        subTitle,
                        description,
                        date,
                        publish,
                        slug,
                        tags,
                        thumbnail,
                    },
                    index
                ) =>
                    publish && (
                        <PostCard
                            key={slug}
                            title={title}
                            subTitle={subTitle}
                            description={
                                description.length > 0
                                    ? `${description.slice(0, 350) + '...'}`
                                    : description
                            }
                            date={date}
                            tags={tags}
                            thumbnail={thumbnail}
                            isLeft={index % 2 == 0}
                            slug={slug}
                        />
                    )
            )}
            <div className="m-6 px-4 py-2 rounded border">
                <QueryPagination totalPage={totalCount} />
            </div>
        </section>
    );
};

export default page;
