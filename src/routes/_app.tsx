import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/_app")({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});
