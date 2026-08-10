export type PaymentRequest = { bookingId: string; amount: number; customerEmail: string };

export type PaymentResult = { provider: string; paymentId: string; checkoutUrl?: string };

// Provider-neutral payment boundary. Configure Razorpay/another gateway through
// environment variables and server-side credentials before enabling live payments.
export async function createPayment(_request: PaymentRequest): Promise<PaymentResult> {
  throw new Error("Payment provider is not configured. Set the gateway credentials before enabling checkout.");
}
