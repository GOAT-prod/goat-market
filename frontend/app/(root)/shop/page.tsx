import { Container } from "@/components/container/Container";
import { Filters } from "@/components/filters/Filters";

export default function Shop() {
  //   const products = useMemo(() => mockedProducts.items, []);
  return (
    <Container>
      <main className='p-8'>
        <Filters />
      </main>
    </Container>
  );
}
