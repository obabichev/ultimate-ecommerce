import React, { useMemo } from "react";
import { Tag } from "../../generated";
import { AggregatedTags, aggregateTags } from "./aggregateTags";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

interface TagsViewProps {
  tags: Tag[];
}

const mapTreeTags = (key: string, aggregatedTags: AggregatedTags) => {
  const aggregatedTag = aggregatedTags[key];
  if (!aggregatedTag) {
    return null;
  }
  return (
    <TreeItem
      key={aggregatedTag.tag.key}
      nodeId={aggregatedTag.tag.key}
      label={aggregatedTag.tag.title}
    >
      {aggregatedTag.children.map((key) => mapTreeTags(key, aggregatedTags))}
    </TreeItem>
  );
};

const TagsView: React.FunctionComponent<TagsViewProps> = ({ tags }) => {
  const aggregatedTags = useMemo(() => aggregateTags(tags), [tags]);
  const roots = tags.filter((tag) => !tag.parent).map((tag) => tag.key);
  console.log("[obabichev]", { aggregatedTags });
  return (
    <TreeView>{roots.map((key) => mapTreeTags(key, aggregatedTags))}</TreeView>
  );
};

export default TagsView;
