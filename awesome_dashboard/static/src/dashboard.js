/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.clientaction";
    static props = ['*'];
    static components = { Layout };

    setup() {
        this.display = {controlPanel: { "top-right": false, "bottom-right": false } }
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
