import Heading from "./Heading";

interface EmptyStateStaticProps {
  title?: string;
  subtitle?: string;
}

const EmptyStateStatic: React.FC<EmptyStateStaticProps> = ({
  title = "No items found",
  subtitle = "Try a different filter",
}) => {
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
    </div>
  );
};

export default EmptyStateStatic;
