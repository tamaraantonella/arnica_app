function isMatchingId(obj: { id?: string }, id: string): boolean {
  if (!obj.id) return false;
  return obj.id === id;
}
