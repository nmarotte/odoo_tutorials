/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl_playground.counter";

    static props = {
        onChange: { type: Function, optional: true },
    }

    setup() {
        this.state = useState({ counter_value: 0});
    }

    increment() {
        this.state.counter_value++;
        this.props.onChange && this.props.onChange();
    }
}
