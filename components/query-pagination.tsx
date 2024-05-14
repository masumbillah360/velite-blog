'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './ui/pagination';

interface QueryPaginationProps {
    totalPage: number;
    className?: string;
}

const QueryPagination = ({ totalPage, className }: QueryPaginationProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const createPageURL = (pageNumber: string | number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const visiblePageCount = 6; // Show 6 visible page numbers
    const halfVisibleCount = Math.floor(visiblePageCount / 2);

    const getVisiblePageNumbers = () => {
        const startPage = Math.max(1, currentPage - halfVisibleCount);
        const endPage = Math.min(totalPage, startPage + visiblePageCount - 1);
        return Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
        );
    };

    const visiblePageNumbers = getVisiblePageNumbers();
    const endPage = visiblePageNumbers[visiblePageNumbers.length - 1];

    return (
        <Pagination className={className}>
            <PaginationContent>
                {prevPage >= 1 && (
                <PaginationItem className="">
                    <PaginationPrevious
                        href={createPageURL(prevPage)}
                    />
                </PaginationItem>
                )}
                {currentPage > 4 && (
                    <PaginationItem className='hidden sm:inline-block'>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {visiblePageNumbers.map((pageNumber) => (
                    <PaginationItem className='hidden sm:inline-block' key={`page-${pageNumber}`}>
                        <PaginationLink
                            isActive={currentPage === pageNumber}
                            href={createPageURL(pageNumber)}>
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {endPage < totalPage && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {nextPage <= totalPage && (
                    <PaginationItem>
                        <PaginationNext href={createPageURL(currentPage + 1)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default QueryPagination;
