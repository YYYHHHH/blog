/**
 * Created by b on 2018/4/8.
 */
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export function editArticle(obj) {
    return {
        type: EDIT_ARTICLE,
        data: obj
    };
}