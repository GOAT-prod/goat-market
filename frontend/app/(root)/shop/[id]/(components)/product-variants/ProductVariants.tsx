'use client'
import { ProductVariantsContainer, } from '../variant-accordion/VariantAccordion';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { createContext, useEffect, useState } from 'react';

export type ProductVarinats = {
    colors?: string[],
    sizes?: string[]
}

interface ProductVariantsProps {
    variants: ProductVarinats
    className?: string;
}


export const ProductVariants = ({ variants: { colors, sizes } }: ProductVariantsProps) => {

    return (<div className="flex flex-col gap-6">
        <Title text="Варианты" size="lg" className="font-semibold" tag="h2" />
        <Accordion type="multiple" className="w-full">
            {colors && <ProductVariantsContainer title={'Цвета'} items={colors} />}
            {sizes && <ProductVariantsContainer title={'Размеры'} items={sizes} />}
        </Accordion>
        {/* <div className='flex flex-col gap-3'>
            <div>
                <p>Выбранный вариант:</p> <span>{''}</span>
            </div>
            <Button className='w-full' size='small'>Добавить</Button>
        </div> */}
    </div>);
}; 