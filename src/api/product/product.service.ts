import {Product} from "./product.type";
import {
  findProductById,
  findProducts,
  createNewProduct,
  updateProductById,
  updateProductPriceById,
  deleteProductById,
} from "./product.repository";

export const getProducts = async () => {
  const products = await findProducts();
  return products;
};

export const getProduct = async (id: number) => {
  const product = await findProductById(id);
  return product;
};

export const createProduct = async (data: Product) => {
  const product = await createNewProduct(data);
  return product;
};

export const updateProduct = async (id: number, data: Product) => {
  const product = await updateProductById(id, data);
  return product;
};

export const updateProductPrice = async (id: number, price: number) => {
  const product = await updateProductPriceById(id, price);
  return product;
};

export const deleteProduct = async (id: number) => {
  const product = await deleteProductById(id);
  return product;
};

export const parsePrice = (price: string) => {
  const parsePrice = parseInt(price);
  if (!Number.isInteger(parsePrice)) throw new Error("price must be integer: " + parsePrice);
  return parsePrice;
};
