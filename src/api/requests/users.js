import {$instance} from "../api";

const template = async (data) => {
    return await $instance.post('...', {data})
}

export default {template}