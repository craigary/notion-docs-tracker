export type CategorySyncScenario =
  | 'create_frontend_and_backend'
  | 'create_backend_then_update_frontend'
  | 'create_frontend_then_update_backend'
  | 'create_frontend_then_ensure_backend_relation'
  | 'update_frontend_and_backend'
  | 'ensure_relations_only'

export type ArticleSyncScenario =
  | 'missing_parent_category'
  | 'create_frontend_and_backend'
  | 'create_backend_then_update_frontend'
  | 'create_frontend_then_update_backend'
  | 'create_frontend_then_ensure_backend_relation'
  | 'update_frontend_and_backend'
  | 'ensure_parent_order_and_relations'

export function resolveCategorySyncScenario(input: {
  hasFrontendPage: boolean
  hasBackendPage: boolean
  hashChanged: boolean
}): CategorySyncScenario {
  const { hasFrontendPage, hasBackendPage, hashChanged } = input

  if (!hasFrontendPage && !hasBackendPage) {
    return 'create_frontend_and_backend'
  }

  if (hasFrontendPage && !hasBackendPage) {
    return 'create_backend_then_update_frontend'
  }

  if (!hasFrontendPage && hasBackendPage) {
    return hashChanged
      ? 'create_frontend_then_update_backend'
      : 'create_frontend_then_ensure_backend_relation'
  }

  return hashChanged ? 'update_frontend_and_backend' : 'ensure_relations_only'
}

export function resolveArticleSyncScenario(input: {
  hasFrontendPage: boolean
  hasBackendPage: boolean
  hasParentCategoryPage: boolean
  hashChanged: boolean
}): ArticleSyncScenario {
  const { hasFrontendPage, hasBackendPage, hasParentCategoryPage, hashChanged } = input

  if (!hasParentCategoryPage) {
    return 'missing_parent_category'
  }

  if (!hasFrontendPage && !hasBackendPage) {
    return 'create_frontend_and_backend'
  }

  if (hasFrontendPage && !hasBackendPage) {
    return 'create_backend_then_update_frontend'
  }

  if (!hasFrontendPage && hasBackendPage) {
    return hashChanged
      ? 'create_frontend_then_update_backend'
      : 'create_frontend_then_ensure_backend_relation'
  }

  return hashChanged ? 'update_frontend_and_backend' : 'ensure_parent_order_and_relations'
}
