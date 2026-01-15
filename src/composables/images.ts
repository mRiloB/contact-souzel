export function useImages() {
  const require = (url: string) => {
    return new URL(url, import.meta.url).href;
  }

  return { require }
}
