// Title
type Title = {
  plain_text: string;
};

type TitleProperties = {
  title: Title[];
};

// Tags
type Tags = {
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

// Page
interface Page {
  id: string;
  properties: PageProperties;
}

export type { Page };
