import LoginForm from "./_features/components/LoginForm";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center p-8 bg-[url('/base-bg.jpg')] bg-cover items-center md:p-24">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl flex flex-col justify-between md:px-20 md:py-14">
        <div>
          <p className="text-center mb-16 text-5xl font-bold">Login</p>
          <LoginForm />
        </div>

        <p className="mt-20">
          Don't have an account? Request one <a href="www.example.com">here.</a>
        </p>
      </div>
    </div>
  );
}
