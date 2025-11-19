import axios from "axios";
import {logAndThrow} from "./util.js"
import { Article } from "./main.js";

const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function validateProduct(productData) {
  if (!productData) {
    throw new Error("productdata가 제공되지 않았습니다.");
  }
  const { name, description, price, tags, images } = productData;

  const missingFielids = [];
  if (!name) missingFielids.push("name");
  if (!description) missingFielids.push;
}

async function getArticleList(params = {}) {
  const url = "https://panda-market-api-crud.vercel.app/articles";
  const resp = await axios.get(url, { params });
  console.log(resp.data.list);
  return resp.data.list.map(
    ({ title, content, Image }) => new Article(title, content, Image)
  );
}

async function getArticle(articleId) {
  const url = "https://panda-market-api-crud.vercel.app/articles/${articleId}";
  const resp = await axios.get(url);
  const { title, content, Image } = resp.data;
  return new Article(title, content, Image);
}

function requestGetArticle(articleId) {
  const url = "https://panda-market-api-crud.vercel.app/articles/${articleId}";
  return axios.get(url);
}

const articleFromInfo = (info) => new Article(title, content, image);

const getArticle = (articleId) => requestGetArticle(articleId);