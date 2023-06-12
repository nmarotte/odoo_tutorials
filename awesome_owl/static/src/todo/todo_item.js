/** @odoo-module **/

import { Component } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.todo_item"

    static props = {
        toggleState: Function,
        removeTodo: Function,
        todo: {type: Object, shape : {
            id: Number,
            description: String,
            isCompleted: Boolean,
        }},
    }

    onChange() {
        this.props.toggleState(this.props.todo.id);
    }

    onClickRemove() {
        this.props.removeTodo(this.props.todo.id);
    }
}