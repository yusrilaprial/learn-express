import prisma from "../../db";
import {Product} from "./product.type";

export const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const findProductById = async (id: number) => {
  const product = await prisma.product.findFirst({where: {id}});
  return product;
};

export const createNewProduct = async (data: Product) => {
  const product = await prisma.product.create({data});
  return product;
};

export const updateProductById = async (id: number, data: Product) => {
  const product = await prisma.product.update({where: {id}, data});
  return product;
};

export const updateProductPriceById = async (id: number, price: number) => {
  const product = await prisma.product.update({where: {id}, data: {price}});
  return product;
};

export const deleteProductById = async (id: number) => {
  const product = await prisma.product.delete({where: {id}});
  return product;
};
