import LoginForm from "./_features/components/LoginForm";
import baseBg from "$/assets/base-bg.jpg";
import BackgroundImage from "$/lib/components/BackgourndImage";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 md:p-24">
      <BackgroundImage src={baseBg} alt="Bg Image" />
      <div className="flex w-full max-w-xl flex-col justify-between rounded-2xl bg-white p-6 md:px-20 md:py-14">
        <div>
          <h1 className="mb-16 text-center text-5xl font-bold">Login</h1>
          <LoginForm />
        </div>

        <p className="mt-20">
          Don't have an account? Request one{" "}
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Request an account on the example.com website (opens in a new tab)"
            className="text-blue-500 underline visited:text-purple-500"
          >
            on our official website
          </a>
          .
        </p>
      </div>
    </main>
  );
}
