import React from "react";
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-2 mt-4 text-indigo-600">
      <Loader2 className="animate-spin w-5 h-5" />
      <span className="font-medium">Processing...</span>
    </div>
  );
}
