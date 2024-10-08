'use client';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../product-card/ProductCard';

interface CatalogProps {
  products: Product[];
}

export const Catalog = ({ products }: CatalogProps) => {
  const router = useRouter();

  const onRedirectToProduct = (product: Product) => {
    router.push(`/shop/${product.id}`)
  }


  return (
    <div className="grid grid-cols-4 gap-[24px] p-[24px] pt-0">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} onClick={() => onRedirectToProduct(product)} />
        </div>
      ))}
    </div>
  );
};
