/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";


class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.clientaction";
    static props = ['*'];
    static components = { Layout };

    setup() {
        this.display = {controlPanel: { "top-right": false, "bottom-right": false } }
        this.action = useService("action");
    }

    openCustomers() {
        this.action.doAction("base.action_partner_form");
    }

    openLeads() {
        this.action.doAction("crm.crm_lead_action_pipeline");
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
