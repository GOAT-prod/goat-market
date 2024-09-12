import { AuthForm } from "@/components/login-form/LoginForm";
import { ModeToggle } from "@/components/toggleTheme/ToggleTheme";

export default async function Home() {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1 className='absolute left-10 top-10 mb-6 text-2xl'>
        <strong>goat</strong> <span className='font-light'>logistic</span>
      </h1>
      <div className='absolute right-10 top-10'>
        <ModeToggle />
      </div>
      <div className='bg-background-secondary hover:border-border-hover flex gap-4 rounded-lg border-2 border-border p-6'>
        <AuthForm />
      </div>
    </div>
  );
}
