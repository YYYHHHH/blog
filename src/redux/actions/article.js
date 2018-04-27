/**
 * Created by b on 2018/4/8.
 */
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const EDIT_ID = 'EDIT_ID';
export function editArticle(obj) {
    return {
        type: EDIT_ARTICLE,
        data: obj
    };
}
export function editId(id) {
    return {
        type: EDIT_ID,
        id
    };
}