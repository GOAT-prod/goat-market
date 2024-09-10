import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export default async function Auth() {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex h-[60%] w-[80%] rounded-lg bg-slate-400 p-4'>
        {/* Левый блок */}
        <div className='flex w-1/2 flex-col items-center justify-center gap-10 bg-slate-200'>
          <h2>goat logistic</h2>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='Введите свой email' />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='password'>Пароль</Label>
            <Input type='password' id='password' placeholder='Введите пароль' />
          </div>
          <Button type='submit' className='bg-white'>
            Войти
          </Button>
        </div>
        <hr className='h-full w-0.5 bg-slate-400' />
        {/* Правый блок */}
        <div className='w-1/2'></div>
      </div>
    </div>
  );
}
