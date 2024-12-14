import { Loader2 } from "lucide-react";
import React from "react";

export interface PageLoaderProps {
  message?: string;
}

const PageLoader: React.FC<PageLoaderProps> = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="text-center">
        <Loader2 className="animate-spin text-primary w-12 h-12" />
      </div>
    </div>
  );
};

export { PageLoader };
