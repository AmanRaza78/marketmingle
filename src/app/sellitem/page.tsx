"use client"
import CreateForm from "~/components/createForm";
import { api } from "~/trpc/react";

const Sellitem = () => {
  const {data: brands} = api.product.getBrand.useQuery();
  const {data: categories} = api.product.getCategory.useQuery();

  return (
    <>
      <div className="mx-auto my-8 max-w-screen-xl bg-gray-950 px-4 py-8 sm:py-16 lg:px-6">
      <CreateForm brands={brands} categories={categories}/>
      </div>
    </>
  );
};

export default Sellitem;
