import { Container } from "@/components/container/Container";
import { mockedProducts } from "@/server/mocks/mockedProducts";
import { Text } from "@/shared/ui/text";
import { useMemo } from "react";

export default function Home() {
  const products = useMemo(() => mockedProducts.items, []);
  return (
    <Container>
      <main className='p-8'>
        <div>
          <Text variant={"h3"} className='mb-5 font-extrabold'>
            {"Сотни товаров для вас"}
          </Text>
          {/* <ProductCard /> */}
        </div>
      </main>
    </Container>
  );
}
