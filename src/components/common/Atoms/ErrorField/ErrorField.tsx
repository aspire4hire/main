import { CircleX } from "lucide-react";

export const ErrorField = ({ error }: { error?: string | null }) => {
  if (!error) return <></>;

  return (
    <p
      className="mt-1 text-xs text-destructive font-semibold ml-2 flex gap-1 items-center"
      role="alert"
      aria-live="polite"
    >
      <span>
        <CircleX size={14} />
      </span>
      {error}
    </p>
  );
};
