import React, { Component } from 'react';
class Add extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nameInput: '',
            quantityInput: ''
        }
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onAddNew(this.nameInput.value, this.quantityInput.value)
        this.nameInput.value = '';
        this.quantityInput.value = '';
    }
    handleNameInput(e) {
        const nameInput = e.target.name;
        const value = e.target.value;
        console.log(value)
        this.setState({ [nameInput]: value });
    }
    handleQInput(e) {
        const quantityInput = e.target.name;
        const value = e.target.value;
        console.log(value)
        this.setState({ [quantityInput]: value });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.prevProps === '' || this.prevState === '')
            console.log(prevProps)
    }
    render() {
        return (
            <div className="formData" >
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input onChange={(event) => this.handleNameInput(event)}
                            className="form-control" value={this.state.name}
                            ref={nameInput => this.nameInput = nameInput} type="text" placeholder="enter fruit name" />
                    </div>
                    <div className="form-group">
                        <input onChange={(event) => this.handleQInput(event)}
                            className="form-control" value={this.state.quantity}
                            ref={quantityInput => this.quantityInput = quantityInput} type="text" placeholder="enter quantity" />
                        <hr />
                        <div>
                            <button className="btn btn-primary" >Add Fruit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Add;