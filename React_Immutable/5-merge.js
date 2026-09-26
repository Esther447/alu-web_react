import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list = List(page1);
  return list.concat(page2);
}

export function mergeElements(page1, page2) {
  const map = Map(page1);
  return List(map.merge(page2).values());
}
