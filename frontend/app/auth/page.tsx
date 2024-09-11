import { AuthForm } from "@/components/login-form/LoginForm";
import { ModeToggle } from "@/components/toggleTheme/ToggleTheme";

export default async function Auth() {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1 className='absolute left-6 top-6 mb-6 text-2xl'>
        <strong>goat</strong> logistic
      </h1>
      <div className='absolute right-6 top-1'>
        <ModeToggle />
      </div>
      <div className='flex gap-4 rounded-lg border-2 border-border bg-foreground p-6 hover:border-border-hover'>
        <AuthForm />
      </div>
    </div>
  );
}
