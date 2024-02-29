import { NextResponse } from "next/server";

export function POST() {
  const isError = Math.random() > 0.5;

  if (isError) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }

  return NextResponse.json({ message: "Welcome!" });
}
