import LoginForm from "./_features/components/LoginForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/base-bg.jpg')] bg-cover p-8 md:p-24">
      <div className="flex w-full max-w-xl flex-col justify-between rounded-2xl bg-white p-6 md:px-20 md:py-14">
        <div>
          <p className="mb-16 text-center text-5xl font-bold">Login</p>
          <LoginForm />
        </div>

        <p className="mt-20">
          Don't have an account? Request one <a href="www.example.com">here.</a>
        </p>
      </div>
    </div>
  );
}
