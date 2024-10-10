import { cn } from '@/lib/utils';
import { Title } from '../ui/title';
import { VariantAccordion } from '../variant-accordion/VariantAccordion';
import { Accordion } from '../ui/accordion';

interface ShopVariantsProps {
    className?: string;
}

export const ShopVariants = ({ className }: ShopVariantsProps) => {
    return (<div className="flex flex-col gap-6">
        <Title text="Варианты" size="lg" className="font-semibold" tag="h2" />
        <Accordion type="single" collapsible className="w-full">
            <VariantAccordion title={'Цвета'} />
            <VariantAccordion title={'Размеры'} />
        </Accordion>
    </div>);
};