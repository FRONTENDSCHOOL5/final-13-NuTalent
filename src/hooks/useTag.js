import { useState } from 'react';

const useTag = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const tagList = ['음악', '미술'];
  const tagRegex = /\[tag:([^\]]+)\]/;

  const selectTag = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const addTagToContent = (content) => {
    if (selectedTag) {
      return `[tag: ${selectedTag}]` + content;
    }
    return content;
  };

  const contentWithoutTag = (content) => {
    return content.replace(tagRegex, '');
  };

  const checkTagInContent = (content, tag) => {
    if (content.includes(`[tag: ${tag}]`)) {
      return true;
    }
    return false;
  };

  const getTagInContent = (content) => {
    const tag = content.match(tagRegex)[0].slice(6, -1);
    return tag;
  };

  return {
    tagList,
    selectedTag,
    selectTag,
    addTagToContent,
    contentWithoutTag,
    checkTagInContent,
    getTagInContent,
  };
};

export default useTag;
