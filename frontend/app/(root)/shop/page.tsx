import { Container } from "@/components/container/Container";

export default function Shop() {
  //   const products = useMemo(() => mockedProducts.items, []);
  return (
    <Container>
      <main className='p-8'>
        <div>
          <p>{"Сотни товаров для вас"}</p>
        </div>
      </main>
    </Container>
  );
}
