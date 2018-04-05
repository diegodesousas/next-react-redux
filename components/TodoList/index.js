import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from 'actions/todos';

import { PrimaryButton, RemoveButton } from 'components/Button';
import Input from 'components/Input';
import { List, ListItem } from 'components/List';

class TodoList extends Component {

    state = {
        newTodoDescription: ''
    };

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoDescription);
        this.setState({ newTodoDescription: '' });
    }

    removeTodo = (id) => this.props.removeTodo(id);

    render() {
        return (
            <div>
                <List>
                    {
                        this.props.todos.map(todo => (
                            <ListItem key={todo.id}>
                                {todo.description} 
                                <RemoveButton onClick={() => this.removeTodo(todo.id)}>Remove</RemoveButton>
                            </ListItem>
                        ))
                    }
                </List>
                <Input 
                    type="text"
                    value={this.state.newTodoDescription}
                    onChange={(e) => this.setState({ newTodoDescription : e.target.value })} />
                    
                <PrimaryButton onClick={this.addNewTodo}>Add Todo</PrimaryButton>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
const mapStateToProps = state => ({ todos : state.todos });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);