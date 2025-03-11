// components/ui/Card.tsx
'use client';

import Image, { ImageProps } from 'next/image';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils/general'; // Assuming you have a class merging utility

type CaptionPosition = 'bottom-left' | 'bottom-center' | 'top-left' | 'top-right' | 'center';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  caption?: string;
  overlay?: boolean | 'hover';
  aspectRatio?: 'square' | 'video' | 'custom' | string;
  captionPosition?: CaptionPosition;
  imageProps?: Partial<ImageProps>;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      src,
      alt,
      width = 'w-full',
      height = 'h-auto',
      caption,
      overlay = false,
      aspectRatio = 'custom',
      captionPosition = 'bottom-left',
      className,
      imageProps,
      ...props
    },
    ref
  ) => {
    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      custom: ''
    };

    const positionClasses: Record<CaptionPosition, string> = {
      'bottom-left': 'bottom-0 left-0 p-4',
      'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 p-4 text-center',
      'top-left': 'top-0 left-0 p-4',
      'top-right': 'top-0 right-0 p-4 text-right',
      'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300',
          typeof aspectRatio === 'string' && aspectRatio in aspectClasses
            ? aspectClasses[aspectRatio as keyof typeof aspectClasses]
            : '',
          width,
          height,
          className
        )}
        {...props}
      >
        <div className={cn(
          'relative',
          typeof aspectRatio === 'string' && aspectRatio in aspectClasses
            ? aspectClasses[aspectRatio as keyof typeof aspectClasses]
            : ''
        )}>
          <Image
            src={src}
            alt={alt}
            fill={true}
            className={cn(
              'object-cover transition-transform duration-300 group-hover:scale-105',
              imageProps?.className
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            {...imageProps}
          />

          {/* Overlay */}
          {overlay && (
            <div className={cn(
              'absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50',
              overlay === 'hover' && 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            )} />
          )}

          {/* Caption */}
          {caption && (
            <div className={cn(
              'absolute z-10 text-white',
              positionClasses[captionPosition],
              overlay === 'hover' && 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            )}>
              <p className="text-sm font-medium drop-shadow-md md:text-base">{caption}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };