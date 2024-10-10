import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { ChoiseVariant } from '../choise-variant/ChoiseVariant';

interface VariantAccordionProps {
    title: string;
    items?: string[]
    className?: string;
}

export const VariantAccordion = ({ className, title }: VariantAccordionProps) => {
    return <div className={cn('', className)}>
        <AccordionItem className="mb-4" value={title}>
            <AccordionTrigger className='pt-0'>{title}</AccordionTrigger>
            <AccordionContent>
                <RadioGroup defaultValue="Beige" >
                    {/* TODO размапить */}
                    <ChoiseVariant id={'r1'} text={'Beige'} />
                    <ChoiseVariant id={'r2'} text={'Black'} />
                    <ChoiseVariant id={'r3'} text={'Blue'} />
                    <ChoiseVariant id={'r4'} text={'Gray'} />
                </RadioGroup>
            </AccordionContent>
        </AccordionItem>
    </div >;
};