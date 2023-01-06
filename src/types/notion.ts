// Title
type Title = {
  plain_text: string;
};

type TitleProperties = {
  title: Title[];
};

// Tags
type Tags = {
  id: string;
  name: string;
};

type TagsProperties = {
  multi_select: Tags[];
};

// Url
type LinkProperties = {
  url: string;
};

// Text
type TextRichText = {
  content: string;
};

type RichText = {
  text: TextRichText;
};

type TextProperties = {
  rich_text: RichText[];
};

// Page properties
interface PageProperties {
  title: TitleProperties;
  tags: TagsProperties;
  demo_link: LinkProperties;
  repo_link: LinkProperties;
  short_description: TextProperties;
  description: TextProperties;
  goals: TextProperties;
  new_things: TextProperties;
}

// Cover properties
interface CoverProperties {
  file: {
    url: string;
  };
}

// Page
interface Page {
  id: string;
  cover: CoverProperties;
  properties: PageProperties;
}

export type { Page };
