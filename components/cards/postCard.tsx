import React from 'react';

import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

const ImageLoader =() => (
    <div>Loading...</div>
) 

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
        <Link className="size-full" href={slug} target="_blank">
            <div
                className={`rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col-reverse sm:flex-row justify-between ${
                    isLeft && 'sm:flex-row-reverse md:flex-cols-revers'
                }`}>
                <div
                    className={`flex justify-between w-full sm:w-1/2 flex-col`}>
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
                                            variant="outline"
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
                                {/* <Avatar>
                                    <AvatarImage
                                        height={50}
                                        width={50}
                                        src={thumbnail}
                                    />
                                    <AvatarFallback>MB</AvatarFallback>
                                </Avatar> */}
                                <Image
                                    src={thumbnail}
                                    className="flex bg-contain items-center justify-center rounded-full bg-muted"
                                    alt="Profile Image"
                                    width={300}
                                    height={300}
                                    quality={100}
                                    style={{ width: "50px", height: "50px"}}
                                    priority
                                />
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
                <Image
                    width={800}
                    height={640}
                    className={cn('w-full bg-contain h-64 sm:h-96', {
                        'sm:w-1/2 sm:rounded-tr-none sm:rounded-l-md ': isLeft,
                        'sm:w-1/2 sm:rounded-r-md sm:rounded-tl-none': !isLeft,
                        'rounded-t-md rounded-b-none': true,
                    })}
                    src={thumbnail}
                    alt="Blog Thumbnail"
                />
            </div>
        </Link>
    );
};

export default PostCard;
