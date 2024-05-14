import React from 'react';

import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CustomIMG, CustomImage, CustomImageFallback } from '../ImageFallback';
import Link from 'next/link';

interface PostCardProps {
    slug: string;
    title: string;
    subTitle: string;
    description: string;
    date: string;
    tags: string[];
    thumbnail: string;
    isLeft?: boolean;
}

const PostCard = ({
    slug,
    title,
    description,
    subTitle,
    date,
    tags,
    thumbnail,
    isLeft,
}: PostCardProps) => {
    return (
        <Link href={`blog/${slug}`} target='_blank'>
            <div
                className={`rounded-lg border bg-card text-card-foreground shadow-sm flex justify-between size-full ${
                    isLeft && 'flex-row-reverse'
                }`}>
                <div className={`flex justify-between w-1/2 flex-col`}>
                    <div
                        className={`flex flex-col justify-between h-full ${
                            isLeft ? 'items-start' : 'items-end'
                        }`}>
                        <div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                    {title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {subTitle}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="">
                                    {tags.map((t) => (
                                        <Button
                                            variant="destructive"
                                            className="mx-1"
                                            key={t}>
                                            #{t}
                                        </Button>
                                    ))}
                                </div>
                                <div className="mt-3">{description}</div>
                            </div>
                        </div>
                        <div className="px-6 py-3 mb-2 rounded shadow-md">
                            <div className="flex justify-center items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        height={50}
                                        width={50}
                                        src={thumbnail}
                                    />
                                    <AvatarFallback>MB</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="text-xl font-bold">
                                        Masum Billah
                                    </h4>
                                    <p className="">{date.split('T')[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomIMG
                    className={`w-1/2 ${
                        isLeft ? 'rounded-l-lg' : 'rounded-r-lg'
                    }`}>
                    <CustomImage className="h-96 w-full" src={thumbnail} />
                    <CustomImageFallback className="h-96 w-full">
                        <div className="text-center">
                            <p>Blog Thumbnail</p>
                            <h4 className="text-xl font-bold">Coming Soon!</h4>
                        </div>
                    </CustomImageFallback>
                </CustomIMG>
            </div>
        </Link>
    );
};

export default PostCard;
