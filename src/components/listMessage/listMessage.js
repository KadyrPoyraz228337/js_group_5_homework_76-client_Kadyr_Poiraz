import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const ListMessage = (
    {author, text, date}
) => {
    const dateFormat = require('dateformat');
    const now = new Date().getDate();
    const messageDate = +dateFormat(date, 'd') !== now ? dateFormat(date, 'd.m.yy h:s') : dateFormat(date, 'h:MM TT');
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <span className="font-weight-bold pr-1 mr-2 mb-auto border-dark border rounded bg-light p-1">{author}</span>
            <span>{text}</span>
            <span className='ml-auto text-muted font-weight-bold' style={{fontSize: '10px'}}>{messageDate}</span>
        </ListGroupItem>
    );
};

export default ListMessage;