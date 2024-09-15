import Image from "next/image";
import Link from "next/link";

import { Container } from "../container/Container";
import { SeachInput } from "../search-input/SeachInput";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ShoppingBag, Square, Truck } from "lucide-react";
import { ModeToggle } from "../toggleTheme/ToggleTheme";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("h-[var(--header-height)]", className)}>
      <Container className='flex h-full border border-border bg-background-secondary'>
        <Link href='/' className='flex items-center gap-[10px] border-r border-border py-5 px-10 w-[var(--filters-width)]'>
          {/* <Truck strokeWidth={1.5} size={26} className="mt-0.5" /> */}
          <span className='text-2xl'>
            <strong>goat</strong> <span className='font-light'>logistic</span>
          </span>
        </Link>
        <div className='flex flex-1 items-center justify-between p-5'>
          <SeachInput className='flex-1' />
          <div className='flex items-center gap-[30px]'>
            <Button size={'small'} className='flex gap-[10px]'>
              <p>Заказы</p>
            </Button>
            <Button size={'small'} variant={"secondary"} className='flex gap-[10px]'>
              <p>Профиль</p>
            </Button>
            <ModeToggle />
          </div>

        </div>
      </Container>
    </header>
  );
};
