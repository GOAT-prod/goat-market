"use client";
import { useState } from "react";
import { useClickOutside } from "@siberiacancode/reactuse";
import { cn } from "@/lib/utils";
// import { Icon20Search } from '@vkontakte/icons';

interface SeachInputProps {
  className?: string;
}

export const SeachInput = ({ className }: SeachInputProps) => {
  const [focused, setFocused] = useState(false);

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => {
    setFocused(false);
  });

  return (
    <div
      ref={clickOutsideRef}
      className={cn(
        `relative flex h-11 items-center gap-[10px] rounded-md border border-[#CBCBCB] px-[15px] py-[10px] ${focused ? "border-transparent" : "border-[#CBCBCB]"}`,
        className
      )}
    >
      {/* TODO попробовать label и html for  */}
      <label htmlFor='search-input'>{/* <Icon20Search /> */}</label>
      <input
        className='w-full outline-none'
        placeholder='Поиск товаров'
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id='search-input'
      />
      {focused && (
        <div className='pointer-events-none absolute inset-0 rounded-md border-[3px] border-primary-hover' />
      )}
    </div>
  );
};
