import type { BlockObjectRequest, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export function createBlocks(blocks: (BlockObjectRequest | null | undefined)[]): BlockObjectRequest[] {
  return blocks.filter((b): b is BlockObjectRequest => !!b)
}

/**
 * Safely retrieves a string representation of a Notion page property.
 * Currently supports 'rich_text' and 'title' types.
 * @param page The Notion page object.
 * @param propertyName The name of the property to retrieve.
 * @returns The string value of the property, or undefined if not found or type is unsupported.
 */
export const getPagePropertyValue = (page: PageObjectResponse, propertyName: string): string | undefined => {
  const prop = page.properties[propertyName]

  if (!prop) {
    return undefined
  }

  // Type-safe access based on discriminated union
  switch (prop.type) {
    case 'rich_text':
      return prop.rich_text.map((rt) => rt.plain_text).join('')

    case 'title':
      return prop.title.map((t) => t.plain_text).join('')

    // Future enhancement: Add cases for other property types as needed
    // case 'number':
    //   return prop.number?.toString();
    // case 'checkbox':
    //   return prop.checkbox?.toString();

    default:
      // Optionally log unhandled types for debugging
      // console.log(`Unhandled property type: ${prop.type}`);
      return undefined
  }
}
