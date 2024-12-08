import { useEffect } from "react";

export const useTitle = (updateTo: string): void => {
  useEffect(() => {
    document.title = updateTo;
  }, [updateTo]);
};
