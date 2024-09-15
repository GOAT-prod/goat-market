import { CheckboxFiltersGroup } from "../checkbox-filters-group/CheckboxFiltersGroup";
import { Title } from "../ui/title";

export const Filters = () => {
  return (
    <>
      <Title text='Фильтрация' size='lg' className='mb-5 font-semibold' tag="h2" />
      <CheckboxFiltersGroup
        title='Обувь'
        name='shoes'
        className='mb-10'
        // onClickCheckbox={filters.setPizzaTypes}
        // selected={filters.pizzaTypes}
        items={[
          { text: "Мужская обувь", value: "1" },
          { text: "Женская обувь", value: "2" },
          { text: "Детская обувь", value: "3" },
          { text: "Аксессуары и уход", value: "4" }
        ]}
      />
      <CheckboxFiltersGroup
        title='Бренды'
        name='shoes'
        className='mb-10'
        // onClickCheckbox={filters.setPizzaTypes}
        // selected={filters.pizzaTypes}
        items={[
          { text: "addidas", value: "1" },
          { text: "Fila", value: "2" },
          { text: "Nike", value: "3" },
          { text: "Reedok", value: "4" },
          { text: "Puma", value: "5" },
          { text: "Under Armour", value: "6" },
          { text: "Kappa", value: "7" }
        ]}
      />
    </>
  );
};
