import { AlertCircle, CheckCircle2 } from "lucide-react";

export function FormStatus({ type, message }: { type: "success" | "error"; message: string }) {
  const Icon = type === "success" ? CheckCircle2 : AlertCircle;
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
        type === "success"
          ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
          : "border-rose-400/25 bg-rose-400/10 text-rose-100"
      }`}
      role="status"
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
