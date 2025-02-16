export const isMobile = () => {
    if (typeof window === "undefined") return false; // Evita errores en SSR (Next.js, etc.)
  
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  