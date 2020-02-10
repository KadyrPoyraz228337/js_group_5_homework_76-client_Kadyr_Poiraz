import React, {Component, createRef} from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListMessage from "../listMessage/listMessage";

class ListMessages extends Component {
    bottom = createRef();

    componentDidMount() { this.bottom.current.scrollIntoView({behavior: 'smooth'}) }
    componentDidUpdate() { this.bottom.current.scrollIntoView({behavior: 'smooth'}) }

    render() {
        return (
            <ListGroup className={`bg-white border rounded w-75 mt-3 ${!this.props.error ? 'mb-5' : 'mb-3'} p-3 overflow-auto`}
                       style={{maxHeight: '600px'}}>
                {this.props.messageList.map(elem => (
                        <ListMessage
                            key={elem.id}
                            author={elem.author}
                            text={elem.message}
                            date={elem.datetime}
                        />
                    )
                )}
                <div ref={this.bottom}/>
            </ListGroup>
        );
    }
}

export default ListMessages;