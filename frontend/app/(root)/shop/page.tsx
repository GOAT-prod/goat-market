import { Container } from "@/components/container/Container";
import { Filters } from "@/components/filters/Filters";
import { Products } from "@/components/products/Products";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/ComboBox";
import { Title } from "@/components/ui/title";
import { mockedProducts } from "@/server/mocks/mockedProducts";
import { LayoutGrid, List } from "lucide-react";
import { Suspense, useMemo } from "react";

export default function Shop() {
  const products = useMemo(() => mockedProducts.items.slice(0, 36), []);

  return (
    <Container >
      <main className="h-[calc(100vh-var(--header-height))] border border-border border-t-0 flex">
        <div className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
          <Suspense>
            <Filters />
          </Suspense>
        </div>
        <div className="flex-1 h-full pb-[16px] overflow-y-auto scrollbar">
          <div className="flex w-full sticky top-0  bg-background py-[16px]  shadow-black/5 px-[24px]">
            <Title text={"Товары"} size='lg' className=' font-semibold' tag="h2" />
            <div className="flex items-center ml-auto gap-2">
              <Combobox />
              <Button size={'icon'} variant={'secondary'}>
                <LayoutGrid className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button size={'icon'} variant={'secondary'}>
                <List className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>
          </div>
          <Products products={products} />
        </div>
      </main>
    </Container>
  );
}
