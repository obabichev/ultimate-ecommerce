import { Tag } from "../../generated";

export type AggregatedTags = {
  [key in string]: { tag: Tag; children: string[] };
};

export const aggregateTags = (tags: Tag[]): AggregatedTags => {
  const result: AggregatedTags = {};
  tags.forEach((tag) => (result[tag.key] = { tag, children: [] }));
  tags.forEach(
    (tag) => tag.parent && result[tag.parent].children.push(tag.key)
  );
  return result;
};
