"use client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { cn } from "@/shared/lib/utils";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface LoginFormProps {
  className?: string;
}

type LoginFormTypes = "login" | "register_person" | "register_organization";

export const AuthForm = ({ className }: LoginFormProps) => {
  const [form, setForm] = useState<LoginFormTypes>("register_organization");

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='mb-10 flex flex-col items-center gap-3'>
        <h2 className='text-xl font-semibold'>Регистрация</h2>
        {/* <h3 className='text-sm font-light'>Введите ваши данные</h3> */}
      </div>
      {form === "login" && <LoginForm />}
      {form === "register_person" && <PersonForm />}
      {form === "register_organization" && <OrganizationForm />}
    </div>
  );
};

const LoginForm = () => {
  return (
    <>
      <InputForm name='Email' type='email' placeholder='Введите почту' />
      <InputForm name='Пароль' type='password' placeholder='Введите пароль' />
      <div className='flex flex-col gap-4'>
        <Button
          type='submit'
          theme='secondary'
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          Войти
        </Button>
        <a href='#' className='text-sm hover:underline'>
          Регистрация
        </a>
      </div>
    </>
  );
};

const PersonForm = () => {
  return (
    <>
      <InputForm name='Email' type='email' placeholder='Введите почту' />
      <InputForm name='Имя' type='text' placeholder='Введите имя' />
      <InputForm name='Пароль' type='password' placeholder='Введите пароль' />

      <div className='flex flex-col items-center gap-4'>
        <Button
          type='submit'
          theme='secondary'
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <div className='flex items-center gap-3'>
            <p>Ваша организация</p>
            <ArrowRight size={20} />
          </div>
        </Button>
        <a href='#' className='text-sm text-gray-500 hover:underline'>
          Вернуть к авторизации
        </a>
      </div>
    </>
  );
};

const OrganizationForm = () => {
  return (
    <>
      <InputForm
        name='Название организации'
        type='email'
        placeholder='Введите название организации'
      />
      <InputForm name='ИНН' type='text' placeholder='Введите ИНН организации' />
      <InputForm name='Адрес' type='text' placeholder='Введите адрес организации' />

      <div className='flex flex-col items-center gap-4'>
        <Button
          type='submit'
          theme='secondary'
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <div className='flex items-center gap-3'>
            <p>Зарегистрироваться</p>
          </div>
        </Button>
        <a href='#' className='text-sm text-gray-500 hover:underline'>
          Вернуть к авторизации
        </a>
      </div>
    </>
  );
};

interface InputFormProps {
  name: string;
  type: string;
  placeholder: string;
}
const InputForm = ({ name, type, placeholder }: InputFormProps) => {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor={`${name}__${type}`}>{name}</Label>
      <Input
        type={type}
        id={`${name}__${type}`}
        placeholder={placeholder}
        className='h-10 w-[300px] px-3'
      />
    </div>
  );
};
