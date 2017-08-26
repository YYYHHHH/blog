/**
 * Created by b on 2017/8/25.
 */
export const ADD_TEXT = 'ADD_TEXT';
export function addText(text) {
    return {
        type: ADD_TEXT,
        data: text
    };
}
