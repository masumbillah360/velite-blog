'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

const CustomIMG = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn('relative flex shrink-0 overflow-hidden', className)}
        {...props}
    />
));
CustomIMG.displayName = AvatarPrimitive.Root.displayName;

const CustomImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn('aspect-video bg-cover h-full w-full', className)}
        {...props}
    />
));
CustomImage.displayName = AvatarPrimitive.Image.displayName;

const CustomImageFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            'aspect-video bg-cover flex h-full w-full items-center justify-center bg-muted',
            className
        )}
        {...props}
    />
));
CustomImageFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { CustomIMG, CustomImage, CustomImageFallback };
