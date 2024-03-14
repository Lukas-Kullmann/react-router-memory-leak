const React = require("react");
const {
  createMemoryRouter,
  Outlet,
  Navigate,
  RouterProvider,
} = require("react-router");
const { render, screen, fireEvent } = require("@testing-library/react");
require("@testing-library/jest-dom/jest-globals");

describe("react router", () => {
  it("with redirect", async () => {
    const router = createMemoryRouter([
      {
        element: React.createElement(Outlet),
        children: [
          {
            element: React.createElement("span", {}, "hello world"),
            path: "/test",
          },
          {
            element: React.createElement(Navigate, { to: "/test" }),
            path: "*",
          },
        ],
      },
    ]);

    render(React.createElement(RouterProvider, { router }));

    await expect(screen.findByText("hello world")).resolves.toBeInTheDocument();
  });

  it("without redirect", async () => {
    const router = createMemoryRouter([
      {
        element: React.createElement("span", {}, "hello world"),
        path: "/",
      },
    ]);

    render(React.createElement(RouterProvider, { router }));

    await expect(screen.findByText("hello world")).resolves.toBeInTheDocument();
  });
});
