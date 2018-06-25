interface _CollectionConfig {
  /**
   * Collection names to exclude.
   */
  exclude?: Array<string>,
  /**
   * Collection names to include.
   */
  include?: Array<string>,
}

/**
 * Collection config allows you to configure which collections should be
 * included or excluded in resulted query or mutation.
 *
 * By default all collections are included in query and mutation (if mutation
 * is not disabled by `disableDefaultMutation` config).
 */
interface CollectionConfig {
  /**
   * By default all collections included in query. But you can limit that by
   * passing list with collections to include. Or in case if you interested
   * in only excluding few collections, you need to setup another exclude
   * list.
   */
  query: _CollectionConfig,

  /**
   * Same config as in query, but for mutations.
   */
  mutation: _CollectionConfig,
}

export const defaultCollectionConfig: CollectionConfig = {
  query: {
    exclude: [],
    include: []
  },
  mutation: {
    exclude: [],
    include: []
  }
}

export default CollectionConfig
