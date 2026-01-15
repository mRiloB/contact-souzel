export function useLinks() {
  const links = {
    instagram: "https://www.instagram.com/ecstudio3d_",
    whatsapp: "https://wa.me/93991768256",
  };
  const open = (url: string) => {
    window.open(url, "__blank");
  }
  const instagram = () => {
    open(links.instagram);
  }
  const whatsapp = () => {
    open(links.whatsapp);
  }

  return {
    instagram, whatsapp
  }
}
