/** @odoo-module */

import { useRef, onMounted } from "@odoo/owl";

export function useAutofocus(element_ref) {
    const element = useRef(element_ref);
    onMounted(() => {
        element.el.focus();
    });
}