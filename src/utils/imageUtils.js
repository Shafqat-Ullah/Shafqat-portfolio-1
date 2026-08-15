export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip any leading ./ or /
  const cleanPath = path.replace(/^[./]+/, '');
  const baseUrl = import.meta.env.BASE_URL || '/Shafqat-portfolio-1/';
  const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${formattedBase}${cleanPath}`;
};
