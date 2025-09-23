import EmptyStateStatic from "./components/EmptyStateStatic";
export const dynamic = "force-dynamic";

export default function NotFoundPage() {
  return (
    <EmptyStateStatic
      title="Page not found"
      subtitle="Please consult Oa for assistance."
    />
  );
}
