import React from "react";
class CUstoemrDelete extends React.Component {

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>DELETE</button>
        )
    }
}

export default CUstoemrDelete;