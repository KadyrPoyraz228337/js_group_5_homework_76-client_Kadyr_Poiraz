import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <form action="#">
            <FormGroup className="m-50 d-flex">
                <Input className='mr-3 w-25' onChange={props.inputChangeHandler} name='author' id="author" placeholder="Author" value={props.state.author}/>
                <Input onChange={props.inputChangeHandler} name='message' id="message" placeholder="Text" value={props.state.message}/>
                <Button type='submit' onClick={props.onClick} className='ml-3'>Add</Button>
            </FormGroup>
        </form>
    );
};

export default TextForm;