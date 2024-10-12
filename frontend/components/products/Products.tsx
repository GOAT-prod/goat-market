'use client';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../product-card/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/app/(services)/products';
import { SkeletonCard } from '../skeleton-card/SkeletonCars';



export const ProductsCatalog = () => {
  const router = useRouter();

  const onRedirectToProduct = (product: Product) => {
    router.push(`/shop/${product.id}`)
  }

  // react query
  // 1. intialData
  // 'use client'
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <div className="grid grid-cols-4 gap-[24px] p-[24px] pt-0">
      {isLoading && Array(12).fill(0).map((item) => {
        return <SkeletonCard />
      })}
      {data?.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} onClick={() => onRedirectToProduct(product)} />
        </div>
      ))}
    </div>
  );
};
