import { Tag } from "../../generated";

export type AggregatedTags = {
  tags: {
    [key in string]: { tag: Tag; children: string[] };
  };
  roots: string[];
};

export const aggregateTags = (tags: Tag[]): AggregatedTags => {
  const result: AggregatedTags = { tags: {}, roots: [] };
  tags.forEach((tag) => (result.tags[tag.key] = { tag, children: [] }));
  tags.forEach(
    (tag) => tag.parent && result.tags[tag.parent].children.push(tag.key)
  );
  tags.forEach((tag) => !tag.parent && result.roots.push(tag.key));
  return result;
};
