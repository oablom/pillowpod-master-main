// app/404.tsx
import EmptyStateStatic from "../components/EmptyStateStatic";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <EmptyStateStatic
        title="Damnit, the page is missing!"
        subtitle="Please consult Oa for assistance."
      />
    </div>
  );
}
