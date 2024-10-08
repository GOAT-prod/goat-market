import { CatalogSettings } from '@/components/catalog-settings/CatalogSettings';
import { Filters } from '@/components/filters/Filters';
import { Catalog } from '@/components/products/Products';
import { ShopContainer } from '@/components/shop-container/ShopContainer';
import { mockedProducts } from '@/server/mocks/mockedProducts';
import { Suspense, useMemo } from 'react';

export default function Shop() {
  const products = useMemo(() => mockedProducts.items.slice(0, 36), []);

  return (
    <>
      {/* TODO* aside в sidebar */}
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        <Suspense>
          <Filters />
        </Suspense>
      </aside>
      <ShopContainer headerTitle={'Товары'} headerDetails={<CatalogSettings />}>
        <Catalog products={products} />
      </ShopContainer>
    </>
  );
}
