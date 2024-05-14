'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

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

    const createPageURL = (pageNumber: string|number) => {
        
    }

    return <div>QueryPagination</div>;
};

export default QueryPagination;
