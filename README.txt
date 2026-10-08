VertexCore checkout + invoice demo

Files:
- order.html: checkout page based on the provided source; preserves its existing navbar, sidebar, footer, and checkout layout. Successful form validation sends the order to invoice.html.
- invoice.html: invoice-style page with payment-method-specific account instructions and print/save-to-PDF action.

Important limitations:
1. This is a front-end demonstration. GitHub Pages is static hosting, so this alone does not create a secure order database, send email, or verify payments.
2. Invoice status intentionally remains Unpaid. Do not change it to Paid based on form fields or a screenshot/receipt alone. A trusted server-side payment webhook or verified manual reconciliation must mark it Paid.
3. Stripe card payments need a server-side Stripe Checkout session and signed webhook. This page intentionally does not collect card number, expiry, or CVV.
4. Do not put secret API keys in GitHub Pages source code. Connect a backend/serverless function and email provider for order persistence and invoice emails.
5. The provided bank and wallet account details are visible in client-side HTML. Only publish them if you intend them to be public.

Deploy both HTML files in the same directory as your existing images/ folder. Replace order.html and add invoice.html. Test the flow using a non-sensitive test order before publishing.
