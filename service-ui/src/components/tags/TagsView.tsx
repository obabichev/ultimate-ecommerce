import React, { useMemo } from "react";
import { Tag } from "../../generated/service-product";
import { AggregatedTags, aggregateTags } from "./aggregateTags";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StringParam, useQueryParam } from "use-query-params";

const TagsViewItem: React.FunctionComponent<{
  tag: string;
  aggregatedTags: AggregatedTags;
}> = ({ tag, aggregatedTags }) => {
  return (
    <TreeItem nodeId={tag} label={aggregatedTags.tags[tag]?.tag.title}>
      {aggregatedTags.tags[tag]?.children.map((childKey) => (
        <TagsViewItem
          key={childKey}
          tag={childKey}
          aggregatedTags={aggregatedTags}
        />
      ))}
    </TreeItem>
  );
};

interface TagsViewProps {
  tags: Tag[];
}

const TagsView: React.FunctionComponent<TagsViewProps> = ({ tags }) => {
  const aggregatedTags = useMemo(() => aggregateTags(tags), [tags]);
  const [tagParam, setTagParam] = useQueryParam("tag", StringParam);

  const [selected, setSelected] = React.useState<string>(tagParam ?? "");
  const [expanded, setExpanded] = React.useState(() =>
    Object.keys(aggregatedTags.tags)
  );

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeId: string) => {
    if (aggregatedTags.tags[nodeId]?.children.length) {
      return;
    }

    const nextTag = nodeId !== selected ? nodeId : "";
    setSelected(nextTag);
    setTagParam(nextTag);
  };

  return (
    <TreeView
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {aggregatedTags.roots.map((key) => (
        <TagsViewItem key={key} tag={key} aggregatedTags={aggregatedTags} />
      ))}
    </TreeView>
  );
};

export default TagsView;
