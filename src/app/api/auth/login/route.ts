import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const isError = Math.random() > 0.5;

  if (isError) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }

  return NextResponse.json({ message: "Welcome!" });
}
