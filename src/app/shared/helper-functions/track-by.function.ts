export function trackBy(elementKey?: string) {
  return (data: any) => {
    if (elementKey) return data[elementKey];
    return data;
  };
}
