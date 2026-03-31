export type NotionForegroundColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'

export type NotionBackgroundColor =
  | 'default_background'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background'

export const NOTION_LAYOUT_CONFIG = {
  category: {
    descriptionCallout: {
      backgroundColor: 'green_background' as NotionBackgroundColor,
      labelColor: 'green' as NotionForegroundColor,
      bodyColor: 'default' as NotionForegroundColor
    },
    syncedBlock: {
      visibleArticleCount: 3,
      sourceToggleTitle: '.',
      toggleColor: 'green' as NotionForegroundColor,
      moreToggleLabel: '查看更多 ',
      moreToggleCount: {
        color: 'green' as NotionForegroundColor,
        bold: true,
        code: true
      }
    }
  },
  article: {
    descriptionCallout: {
      backgroundColor: 'blue_background' as NotionBackgroundColor,
      labelColor: 'blue' as NotionForegroundColor,
      bodyColor: 'blue' as NotionForegroundColor
    }
  }
} as const
