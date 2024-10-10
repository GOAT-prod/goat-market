import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import { RadioGroupItem } from '../ui/radio-group';

interface ChoiseVariantProps {
    id: string;
    text: string
    className?: string;
}

export const ChoiseVariant = ({ className, id, text }: ChoiseVariantProps) => {
    return (
        <div className='group'>
            <div className="flex items-center space-x-2 rounded-md border border-border p-3 group-hover:bg-secondary-hover cursor-pointer">
                <Label htmlFor={id} className='text-sm font-medium flex-1'>{text}</Label>
                <RadioGroupItem className="group-hover:bg-secondary" value={text} id={id} />
            </div>
        </div>
    );
};