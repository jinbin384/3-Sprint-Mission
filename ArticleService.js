// ArticleService.js (파일명 PascalCase로 바꾸는 걸 추천)
import axios from "axios";
import { logAndThrow } from "./util.js";
import { Article } from "./article.js";

const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

function throwIfResponseFailed(response) {
  // 2XX 체크
  if (response.status < 200 || response.status >= 300) {
    console.error("Article API 응답 에러:", response.status, response.data);
    throw new Error("response failed", { cause: response });
  }
  return response;
}

// getArticleList(page, pageSize, keyword)
export function getArticleList(params = {}) {
  return axios
    .get(BASE_URL, { params })
    .then(throwIfResponseFailed)
    .then(({ data: { list } }) => list.map(Article.of))
    .catch((e) => logAndThrow("getting article list", e));
}

export function getArticle(articleId) {
  return axios
    .get(`${BASE_URL}/${articleId}`)
    .then(throwIfResponseFailed)
    .then(({ data }) => Article.of(data))
    .catch((e) => logAndThrow("getting article", e));
}

// body에 title, content, image 포함 (writer도 같이 넘겨도 OK)
export function createArticle(article) {
  // article: { title, content, image, writer? }
  return axios
    .post(BASE_URL, article)
    .then(throwIfResponseFailed)
    .then(({ data }) => Article.of(data))
    .catch((e) => logAndThrow("creating article", e));
}

export function patchArticle(id, article) {
  return axios
    .patch(`${BASE_URL}/${id}`, article)
    .then(throwIfResponseFailed)
    .then(({ data }) => Article.of(data))
    .catch((e) => logAndThrow("patching article", e));
}

export function deleteArticle(articleId) {
  return axios
    .delete(`${BASE_URL}/${articleId}`)
    .then(throwIfResponseFailed)
    .then(({ data }) => data) // 필요시 data.id 등으로 변경
    .catch((e) => logAndThrow("deleting article", e));
}
