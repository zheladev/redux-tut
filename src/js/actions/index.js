import { GET_TASKS, ADD_ARTICLE } from "../constants/action-types";

export function getTasks(payload) {
    return { type: GET_TASKS, payload };
}

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}