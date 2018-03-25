import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todos';

class TodoList extends Component {

    state = {
        newTodoDescription: ''
    };

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoDescription);
        this.setState({ newTodoDescription: '' });
    }

    removeTodo = (id) => {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map(todo => (
                            <li key={todo.id}>
                                {todo.description} 
                                <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
                <input 
                    type="text"
                    value={this.state.newTodoDescription}
                    onChange={(e) => this.setState({ newTodoDescription : e.target.value })} />
                
                <button onClick={this.addNewTodo}>Add Todo</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
const mapStateToProps = state => ({ 
    todos : state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);