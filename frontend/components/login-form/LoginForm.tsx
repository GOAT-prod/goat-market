"use client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import next from "next";
import { useRouter } from "next/navigation";

const authFormConfig = {
  login: {
    formTitle: "Вход",
    buttonText: "Войти"
  },
  register_person: {
    formTitle: "Регистрация",
    buttonText: "Зарегистрироваться"
  },
  register_organization: {
    formTitle: "Регистрация",
    buttonText: "Зарегистрироваться"
  }
};

type LoginFormTypes = "login" | "register_person" | "register_organization";

export const AuthForm = () => {
  const [form, setForm] = useState<LoginFormTypes>("login");
  const { formTitle, buttonText } = authFormConfig[form];
  const router = useRouter();

  const onChangeForm = (formType: LoginFormTypes) => {
    setForm(formType);
  };

  const onAuth = () => {
    router.push("/shop");
  };

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='mb-10 flex flex-col items-center gap-3'>
        <h2 className='text-xl font-semibold'>{formTitle}</h2>
        {/* <h3 className='text-sm font-light'>Введите ваши данные</h3> */}
      </div>
      {form === "login" && <LoginForm onChangeForm={onChangeForm} onAuth={onAuth} />}
      {form === "register_person" && <PersonForm onChangeForm={onChangeForm} />}
      {form === "register_organization" && <OrganizationForm onChangeForm={onChangeForm} />}
    </div>
  );
};

interface LoginFormProps {
  onChangeForm: (formType: LoginFormTypes) => void;
  onAuth?: () => void;
}

const LoginForm = ({ onChangeForm, onAuth }: LoginFormProps) => {
  return (
    <>
      <InputForm name='Email' type='email' placeholder='Введите почту' />
      <InputForm name='Пароль' type='password' placeholder='Введите пароль' className='mb-5' />
      <div className='flex flex-col gap-5'>
        <Button
          type='submit'
          theme='secondary'
          onClick={onAuth}
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          Войти
        </Button>
        <a
          href='#'
          className='text-sm hover:underline'
          onClick={() => onChangeForm("register_person")}
        >
          Регистрация
        </a>
      </div>
    </>
  );
};

const PersonForm = ({ onChangeForm }: LoginFormProps) => {
  return (
    <>
      <InputForm name='Email' type='email' placeholder='Введите почту' />
      <InputForm name='Имя' type='text' placeholder='Введите имя' />
      <InputForm name='Пароль' type='password' placeholder='Введите пароль' className='mb-5' />

      <div className='flex w-full items-center justify-between'>
        <Button
          type='button'
          onClick={() => onChangeForm("login")}
          theme='secondary'
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          type='button'
          onClick={() => onChangeForm("register_organization")}
          theme='secondary'
          className='flex h-10 w-[12.25rem] items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <div className='flex items-center gap-3'>
            <p>Ваша организация</p>
            <ArrowRight size={20} />
          </div>
        </Button>
      </div>
    </>
  );
};

const OrganizationForm = ({ onChangeForm }: LoginFormProps) => {
  return (
    <>
      <InputForm
        name='Название организации'
        type='email'
        placeholder='Введите название организации'
      />
      <InputForm name='ИНН' type='text' placeholder='Введите ИНН организации' />
      <InputForm
        name='Адрес'
        type='text'
        placeholder='Введите адрес организации'
        className='mb-5'
      />

      <div className='flex w-full items-center justify-between'>
        <Button
          type='button'
          onClick={() => onChangeForm("register_person")}
          theme='secondary'
          className='flex h-10 items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          type='button'
          theme='secondary'
          className='flex h-10 w-[12.25rem] items-center px-4 py-0 hover:bg-[#1f1f1f]'
        >
          <div className='flex items-center gap-3'>
            <p>Зарегистрироваться</p>
          </div>
        </Button>
      </div>
    </>
  );
};

interface InputFormProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}
const InputForm = ({ name, type, placeholder, className }: InputFormProps) => {
  return (
    <div className={cn("grid w-full max-w-sm items-center gap-1.5", className)}>
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
