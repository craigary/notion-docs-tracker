import fs from 'fs/promises'
import path from 'path'

/**
 * Writes data to a file, ensuring the directory exists.
 * @param {string} filePath - The path to the file.
 * @param {string|Buffer|Uint8Array} data - The data to write.
 * @param {object} [options] - Options for fs.writeFile.
 */
export async function writeFileEnsureDir(
  filePath: string,
  data: string | Buffer | Uint8Array,
  options?: Parameters<typeof fs.writeFile>[2]
) {
  const dir = path.dirname(filePath)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(filePath, data, options)
}
