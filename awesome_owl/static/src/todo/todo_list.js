/** @odoo-module **/

import { Component, useState, useRef } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template = "awesome_owl.todo_list"

    static components = { TodoItem };

    setup() {
        this.todos = useState([]);
        useAutofocus("new_todo_input");
        this.nextid = 0;
    }

    addTodo(ev) {
        if (ev.keyCode == 13 && ev.target.value) {
            this.todos.push({
                id: this.nextid++,
                description: ev.target.value,
                isCompleted: false,
            })
            ev.target.value = "";
    };
    }

    toggleTodo(todoId) {
        console.log(todoId);
        const todo = this.todos.find((todo) => todo.id === todoId);
        console.log(todo);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }

    removeTodo(todoId) {
        this.todos.splice(
            this.todos.findIndex((todo) => todo.id === todoId),
            1
        );
    }
    
}