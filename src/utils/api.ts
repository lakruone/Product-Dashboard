

export const getUrlWithPathParam = (url: string, pathParam: Record<string, unknown> | undefined) => {
  if (!pathParam) return url;

  const spited = url.split(/[{}]/);
  return spited.reduce((acc, i) => {
      if (pathParam[i]) {
      return acc + `${pathParam[i]}`;
      } else {
      return acc + `${i}`;
      }
  }, '');
}