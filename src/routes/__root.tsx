import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#072235] mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-[#072235] mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-[14px] text-[#003893] hover:underline"
        >
          Go back to Home
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: NotFound,
});

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "eShasan",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "E-Governance platform for digital transformation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "provider": {
      "@type": "Organization",
      "name": "Ninja Infosys",
      "url": "https://ninjainfosys.com",
    },
  })}
</script>;
