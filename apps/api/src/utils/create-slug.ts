export function createSlug(text: string): string {
  let slug = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  slug = slug.replace(/[^a-z0-9-]/g, '-')
  slug = slug.replace(/-+/g, '-')
  slug = slug.replace(/^-|-$/g, '')

  return slug
}
