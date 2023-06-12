/** @odoo-module **/

import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";
import { TodoList } from "./todo/todo_list";
import { TodoItem } from "./todo/todo_item";

export class Playground extends Component {
    static template = "owl_playground.playground";

    static components = { Counter, Card, TodoList, TodoItem };

    value2 = markup("<div class='text-primary'>some text 2</div>");

    setup() {
        this.state = useState({ sum_value: 2 });
    }

    incrementSum() {
        this.state.sum_value++;
    }
}
