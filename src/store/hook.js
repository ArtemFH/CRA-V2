import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as TemplateActionsCreator from './template/actions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...TemplateActionsCreator
    }, dispatch)
}