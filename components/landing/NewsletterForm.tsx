"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const emailSchema = z.object({
  email: z
    .string()
    .pipe(z.string().trim().min(1, "Email is required"))
    .pipe(z.string().email("Please enter a valid email")),
});

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      const message = result.error.issues?.[0]?.message ?? "Unknown error";
      setError(message);
      return;
    }

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  return success ? (
    <Card className='bg-green-700 border-green-600'>
      <CardContent className='pt-6 flex items-center'>
        <p className='text-white text-center font-medium'>
          Thank you for subscribing!
        </p>
      </CardContent>
    </Card>
  ) : (
    <Card className='bg-main-bg'>
      <CardHeader className='p-0'>
        <CardTitle className='text-3xl font-normal text-white'>
          Join our community
        </CardTitle>
        <CardDescription className='text-white'>
          Stay updated with the latest news and releases
        </CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row gap-1'
        >
          <Input
            placeholder='Your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='flex-1 p-3 placeholder:text-small-text bg-outer-container-bg border-none outline-none'
          />
          <Button
            type='submit'
            className='bg-green-700 hover:bg-green-600 cursor-pointer'
          >
            Subscribe
          </Button>
        </form>
        {error ? (
          <p className='text-destructive text-sm mt-2'>{error}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
