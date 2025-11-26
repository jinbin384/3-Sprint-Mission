// article.js
export class Article {
  #likeCount;

  // title, content, writer, likeCount, createdAt, image
  constructor(title, content, writer, image, createdAt = new Date()) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.image = image;
    this.createdAt = createdAt;
    this.#likeCount = 0;
  }

  like() {
    this.#likeCount++;
  }

  get likeCount() {
    return this.#likeCount;
  }

  // API 응답 → Article 인스턴스
  static of({ title, content, writer, image, createdAt }) {
    return new Article(
      title,
      content,
      writer ?? "unknown",
      image,
      createdAt ? new Date(createdAt) : new Date()
    );
  }
}
