import { Container } from "@/components/container/Container";
import { Filters } from "@/components/filters/Filters";
import { Suspense } from "react";

export default function Shop() {
  //   const products = useMemo(() => mockedProducts.items, []);
  return (
    <Container >
      <main className="h-[calc(100vh-var(--header-height))] border border-border border-t-0 ">

        <div className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
          <Suspense>
            <Filters />
          </Suspense>
        </div>
        <div className="flex-1">
          {/* <Products/> */}
        </div>
      </main>
    </Container>
  );
}
