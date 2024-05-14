import React from 'react';

import { posts } from '@/.velite';
import PostCard from '@/components/cards/postCard';
import QueryPagination from '@/components/query-pagination';

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

const page = ({ searchParams }: BlogPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const POST_PER_PAGE = 6;
    const totalCount = Math.ceil(posts.length / POST_PER_PAGE);
    const disPlayPosts = posts.slice(
        POST_PER_PAGE * (currentPage - 1),
        POST_PER_PAGE * currentPage
    );
    console.log(disPlayPosts[0].slugAsParams);
    return (
        <section className="container mx-auto flex flex-col justify-center items-center gap-3">
            {disPlayPosts.map(
                (
                    {
                        title,
                        subTitle,
                        description,
                        date,
                        body,
                        publish,
                        slug,
                        slugAsParams,
                        tags,
                        thumbnail,
                    },
                    index
                ) => (
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
                        slug={slugAsParams}
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
