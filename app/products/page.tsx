import React from "react";
import ProductModal from "./productModal";

type Product = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getProducts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="pb-2">
        <ProductModal />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>

              <td>{item.completed === true ? "Done" : "Not Done"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
