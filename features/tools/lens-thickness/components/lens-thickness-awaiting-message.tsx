type LensThicknessAwaitingMessageProps = {
  message: string;
};

export const LensThicknessAwaitingMessage = ({
  message,
}: LensThicknessAwaitingMessageProps) => (
  <p className="text-sm italic text-muted-foreground">{message}</p>
);
