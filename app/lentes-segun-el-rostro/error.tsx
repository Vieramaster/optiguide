"use client"
import { ErrorPage } from "@/components/ui/error-page";
const Error = ({ error }: { error: Error & { digest?: string } }) => (
  <ErrorPage message={error.message} />
);

export default Error;
