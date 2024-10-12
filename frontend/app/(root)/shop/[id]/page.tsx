import { BreadcrumbDemo } from "@/components/breadcrumb-demo/BreadcrumbDemo";
import { useMemo } from "react";
import { ProductContainer } from "@/components/shop-container/ShopContainer";
import { ProductVariants } from "./(components)/product-variants/ProductVariants";
import { ProductItem } from "@/components/product-item/ProductItem";

export default function ProductPage({ params }: { params: { id: string } }) {

  // Аля получаю инфу с бека по роуту /api/products/:id

  return (
    <>
      {/* TODO rename fitters на sidebar */}
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        {/* <ProductVariants variants={{ colors: product.color, sizes: product.size }} /> */}
      </aside>
      <ProductContainer headerTitle="Товар" headerDetails={<BreadcrumbDemo />}>
        {/* <ProductItem product={product} /> */}
        {'Айтем'}
      </ProductContainer>
    </>
  );
}