import { Container } from "@/components/container/Container";
import { Text } from "@/shared/ui/text";

export default function Shop() {
  //   const products = useMemo(() => mockedProducts.items, []);
  return (
    <Container>
      <main className='p-8'>
        <div>
          <Text variant={"h3"} className='mb-5 font-extrabold'>
            {"Сотни товаров для вас"}
          </Text>
        </div>
      </main>
    </Container>
  );
}
