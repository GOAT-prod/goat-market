import { BreadcrumbDemo } from "@/components/breadcrumb-demo/BreadcrumbDemo";
import { CatalogItem } from "@/components/catalog-item/CatalogItem";
import { ShopContainer } from "@/components/shop-container/ShopContainer";
import { mockedProducts } from "@/server/mocks/mockedProducts";
import { Suspense, useMemo } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {

  // Аля получаю инфу с бека по роуту /api/products/:id
  const product = useMemo(() => mockedProducts.items.filter((product) => product.id.toString() === params.id)[0], []);

  return (
    <>
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        <Suspense>
          {/* <Filters /> */}
        </Suspense>
      </aside>
      <ShopContainer headerTitle="Товар" headerDetails={<BreadcrumbDemo />}>
        <CatalogItem product={product} />
      </ShopContainer>
    </>
  );
}