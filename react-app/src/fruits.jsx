import React, { Component } from 'react';
class Fruits extends Component {
    render() {
        const { onRemove, onAdd, onDelete, fruits } = this.props
        return (
            <div>
                <hr />
                <ul>
                    {fruits.map(fruit =>
                        <li key={fruit.id}>
                            <button onClick={() => onRemove(fruit)} className="btn btn-warning btn-sm">- -</button>
                            <span>{fruit.id}</span>  <span className="m-1 badge  badge-secondary"> {fruit.Name} ({fruit.quantity})</span>
                            <button onClick={() => onAdd(fruit)} className="btn btn-primary btn-sm">++</button>
                            <button onClick={() => onDelete(fruit)} className="btn btn-danger btn-sm">X</button>
                        </li>
                    )}

                </ul>
            </div>
        );
    }
}

export default Fruits;