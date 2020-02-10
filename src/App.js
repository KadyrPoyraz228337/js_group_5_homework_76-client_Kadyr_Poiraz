import React, {createRef, useEffect} from 'react';
import TextForm from "./components/form/form";
import ListMessages from "./components/listMessages/listMessages";
import Container from "reactstrap/es/Container";
import {connect} from "react-redux";
import {
  addNewMessage,
  checkNewMessage,
  createMessages,
  inputChangeHandler,
  removeError
} from "./store/actions/chat";
import {Alert} from "reactstrap";

const App = props => {

    const bottom = createRef();

    const addNewMessage = async (e) => {
        e.preventDefault();
        await props.addNewMessage(props.state);
    };


    const checkNewMessage = () => {
        setInterval(async () => {
            props.checkNewMessage();
        }, 3000);
    };

    const inputChangeHandler = e => props.inputChangeHandler(e);

    useEffect(() => {
        props.createMessages();
        checkNewMessage();
    }, []);


    return props.state.listMessages && (
        <Container className={`d-flex flex-column align-items-center bg-light border rounded mt-4`}>
            <ListMessages messageList={props.state.listMessages} buttom={bottom} error={props.state.error}/>
            {!!props.state.error && <Alert color="danger" isOpen={props.state.error} toggle={props.removeError}>
              Author and message must be present in the request
            </Alert>}
            <TextForm
                onClick={addNewMessage}
                inputChangeHandler={inputChangeHandler}
                state={props.state}
                inpVal={props.state.message}
            />
        </Container>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    addNewMessage: data => dispatch(addNewMessage(data)),
    createMessages: data => dispatch(createMessages(data)),
    checkNewMessage: () => dispatch(checkNewMessage()),
    inputChangeHandler: e => dispatch(inputChangeHandler(e)),
  removeError: () => dispatch(removeError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
