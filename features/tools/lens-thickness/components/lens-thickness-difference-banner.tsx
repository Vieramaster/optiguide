type LensThicknessDifferenceBannerProps = {
  message: string | null;
};

export const LensThicknessDifferenceBanner = ({
  message,
}: LensThicknessDifferenceBannerProps) => {
  if (!message) {
    return null;
  }

  return (
    <p
      className="rounded-md border border-border bg-muted/40 px-4 py-3 text-sm font-medium"
      aria-live="polite"
    >
      {message}
    </p>
  );
};
