import * as types from 'services/types';
import * as loader from 'services/common/loaderActions';
import { tryGetMessage } from 'root/utils/errorHandler';
import pipeHolder from './pipeHolder';

export function setItem(item) {
    return {
        type: types.HOME_SETITEM,
        item
    };
}

export function addMessage(item) {
    return {
        type: types.HOME_ADDMESSAGE,
        item
    };
}

export function sendMessageAsync(user, message) {
    console.log("user/message", user, message)
    return async (dispatch) => {
        try {
            dispatch(loader.wait(types.HOME_SENDMESSAGEASYNC));
            await pipeHolder.sendMessage(user, message);
            dispatch(loader.ok(types.HOME_SENDMESSAGEASYNC));
        } catch (error) {
            dispatch(loader.error(types.HOME_SENDMESSAGEASYNC, tryGetMessage(error)));
        }
    };
}
