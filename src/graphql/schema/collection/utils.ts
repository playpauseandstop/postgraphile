export function excludeCollection (collection: string, toExclude?: Array<string>): boolean {
  return toExclude && toExclude.length ? toExclude.indexOf(collection) !== -1 : false;
}

export function includeCollection (collection: string, toInclude?: Array<string>): boolean {
  return toInclude && toInclude.length ? toInclude.indexOf(collection) !== -1 : true;
}
