import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function PaginationComponent() {
    const active = 1;
    const items = [];
    
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );
}
