// main.js
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

async function main() {
  try {
    // Article 리스트 확인 (.then/catch는 서비스 내부에서 처리)
    const articles = await getArticleList({ page: 1, pageSize: 5 });
    console.log("Article list:", articles);

    // Product 리스트 확인 (products 배열 인스턴스)
    const products = await getProductList({ page: 1, pageSize: 5 });
    console.log("Product list:", products);

    // 필요하면 아래 create/patch/delete도 테스트
    /*
    const newArticle = await createArticle({
      title: "테스트 제목",
      content: "테스트 내용",
      image: "https://example.com/image.png",
      writer: "정진",
    });
    console.log("Created article:", newArticle);

    const newProduct = await createProduct({
      name: "테스트 상품",
      description: "테스트 설명",
      price: 10000,
      tags: ["전자제품", "테스트"],
      images: ["https://example.com/product.png"],
      manufacturer: "정진전자",
    });
    console.log("Created product:", newProduct);
    */
  } catch (e) {
    console.error("main 실행 중 에러:", e);
  }
}

main();
