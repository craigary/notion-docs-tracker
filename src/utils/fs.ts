const CONTENT_DIRECTORY_URL = new URL('../../content/', import.meta.url)

export async function saveContentIfNeeded(enabled: boolean, key: string, data: string) {
  if (!enabled) {
    return
  }

  await Bun.write(new URL(`./${key}.md`, CONTENT_DIRECTORY_URL), data, {
    createPath: true
  })
}
