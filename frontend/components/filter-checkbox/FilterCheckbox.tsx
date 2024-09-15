"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name
}: FilterChecboxProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className='rounded flex items-center justify-center rounded'
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className='flex-1 cursor-pointer leading-none text-[14px]'
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
