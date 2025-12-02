import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
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
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
  notFoundComponent: NotFound,
});
