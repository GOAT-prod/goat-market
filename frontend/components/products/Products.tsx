import { ProductCard } from "../product-card/ProductCard";

interface ProductsProps {
    products: Product[]
}

export const Products = ({ products }: ProductsProps) => {

    return (
        <div className="grid grid-cols-4 gap-[24px] p-[24px] pt-0">
            {products.map((product, index) =>
                <div key={index}><ProductCard product={product} /></div>
            )}
        </div>
    );
}