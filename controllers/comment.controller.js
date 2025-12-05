import * as commentService from '../services/comment.service.js';
import { NotFoundError } from '../utils/custom-error.js';
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export const createProductComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await commentService.createComment({ content, productId: parseInt(id) });
  res.status(201).json(comment);
});
export const createArticleComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await commentService.createComment({ content, articleId: parseInt(id) });
  res.status(201).json(comment);
});
export const getProductComments = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const limit = parseInt(req.query.limit) || 10;
  const cursor = req.query.cursor;
  const result = await commentService.getComments({ productId: parseInt(id), limit, cursor });
  res.status(200).json(result);
});
export const getArticleComments = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const limit = parseInt(req.query.limit) || 10;
  const cursor = req.query.cursor;
  const result = await commentService.getComments({ articleId: parseInt(id), limit, cursor });
  res.status(200).json(result);
});
export const updateComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const updated = await commentService.updateComment(commentId, content);
  res.status(200).json(updated);
});
export const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  await commentService.deleteComment(commentId);
  res.status(204).send();
});
