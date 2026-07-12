import { extractVideoId } from "./youtube";

export function getVideoId(url: string): string | null {
  return extractVideoId(url);
}