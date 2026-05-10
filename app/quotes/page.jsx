import { Suspense } from "react";
import QuotesClients from "./QuotesClients";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuotesClients />
    </Suspense>
  )
}