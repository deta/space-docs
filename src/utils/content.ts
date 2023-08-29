import { docsSectionsOrder } from "@/config";
import type { MarkdownInstance, MarkdownHeading } from "astro";
import { getCollection } from "astro:content";
import { pascalCase } from "scule";

export type AstroPage = MarkdownInstance<Record<string, any>>;

export type Page = {
  title: string;
  path: string;
  fileUrl: string;
  filename: string;
  locale: string;
  isDraft: boolean;
  isHidden: boolean;
  sections: string[];
  headings: MarkdownHeading[];
  frontmatter: AstroPage["frontmatter"];
};

export type PageItem = {
  title: string;
  link: string;
  keywords: string[];
  position?: number;
};

export type SectionItem = {
  title: string;
  position?: number;
  children: (SectionItem | PageItem)[];
};

export type SearchHit = {
  hierarchy_radio_lvl0: string;
  hierarchy_radio_lvl1: string;
  hierarchy_radio_lvl2: string;
  hierarchy_radio_lvl3: string;
  hierarchy_lvl0: string;
  hierarchy_lvl1: string;
  hierarchy_lvl2: string;
  hierarchy_lvl3: string;
  hierarchy_lvl4: string;
  hierarchy_lvl5: string;
  hierarchy_lvl6: string;
  content: string;
  objectID: string;
  url: string;
};

export const extractKeywords = (str: string) =>
  str
    .split(",")
    .map((val) => val.trim())
    .filter((val) => val !== "");

export const generateTitle = (path: string) => path.split(/[\s-]/g).map(pascalCase).join(" ");

export const removeTrailingSlash = (path: string) => path.replace(/\/+$/, "");

export const parsePages = (files: AstroPage[]) => {
  const defaultLocale = "en";
  const locales = ["en"];

  const pages: Page[] = files.map((post) => {
    // url will have the format: /docs/...
    const parts =
      post?.url
        ?.split("/")
        .slice(2, -1)
        .filter((v) => v) || [];
    const locale = locales.includes(parts[0]) ? parts.shift() || defaultLocale : defaultLocale;

    const headings = post.getHeadings();
    const filename = post.file.split("/").pop() || "";
    const extension = filename.split(".").pop() || "";
    const title = post.frontmatter.title
      ? post.frontmatter.title
      : generateTitle(filename.replace(`.${extension}`, ""));
    const isDraft = post.frontmatter.draft === true;
    const isHidden = post.frontmatter.hidden === true;

    const sections = parts.map((part) => generateTitle(part));

    return {
      frontmatter: post.frontmatter,
      path: removeTrailingSlash(post.url || ""),
      fileUrl: post.file,
      isDraft,
      isHidden,
      title,
      headings,
      filename,
      locale,
      sections
    };
  });

  const filtered = pages.filter((page) => !page.isDraft && !page.isHidden);
  return filtered;
};

export const parseSections = (pages: Page[]) => {
  let result: SectionItem[] = [];

  pages.forEach((page) => {
    const keywords = new Set<string>();

    // Keywords
    const extractedKeywords = page?.frontmatter?.keywords
      ? extractKeywords(page.frontmatter.keywords)
      : [];
    extractedKeywords.forEach((keyword) => keywords.add(keyword));

    // Headings
    page.headings.forEach((heading) => {
      if (heading.text) keywords.add(heading.text.toLowerCase());
    });

    const sections = page.sections;
    const pageItem: PageItem = {
      title: page.title,
      link: page.path,
      position: page.frontmatter.position,
      keywords: [...keywords]
    };

    if (sections.length <= 1) {
      const section = sections[0] || "Overview";

      const existingIdx = result.findIndex((val) => val?.title === section);
      if (existingIdx !== -1) {
        if (result[existingIdx]?.children?.length) {
          result[existingIdx].children.push(pageItem);
        } else {
          result[existingIdx].children = [pageItem];
        }
      } else {
        result.push({
          title: section,
          children: [pageItem]
        });
      }
    } else if (sections.length === 2) {
      const existingIdx = result.findIndex((val) => val?.title === sections[0]);
      if (existingIdx !== -1) {
        if (result[existingIdx]?.children?.length) {
          const existingChildIndex = result[existingIdx].children.findIndex(
            (val) => val?.title === sections[1]
          );
          if (existingChildIndex !== -1) {
            if ((result[existingIdx].children[existingChildIndex] as any).children === undefined) {
              console.log(`[parsing]: conflicting page title with section title: "${sections[1]}"`);
              return;
            } else {
              (result[existingIdx].children[existingChildIndex] as SectionItem).children.push(
                pageItem
              );
            }

            return;
          } else {
            result[existingIdx].children.push({
              title: sections[1],
              position: Infinity,
              children: [pageItem]
            });
          }
        } else {
          result[existingIdx].children = [
            {
              title: sections[1],
              position: -1,
              children: [pageItem]
            }
          ];
        }
      } else {
        result.push({
          title: sections[0],
          children: [
            {
              title: sections[1],
              position: Infinity, // todo get section position from filename
              children: [pageItem]
            }
          ]
        });
      }
    }
  });

  // Sort sections
  result = result.sort((a: any, b: any) => {
    return docsSectionsOrder.indexOf(a.title) - docsSectionsOrder.indexOf(b.title);
  });

  // Sort pages by position
  result.forEach((section) => {
    section.children = section.children.sort((a, b) => {
      return (a as any).position - (b as any).position;
    });

    section.children.forEach((child) => {
      if ("children" in child) {
        child.children = child.children.sort((a, b) => {
          return (a as any).position - (b as any).position;
        });
      }
    });
  });

  return result;
};

// Example: getting_started_1662902834
export const generateActionId = (str: string) =>
  `${str?.toLowerCase()?.replace(/ /g, "_")}_${Date.now() + Math.random()}`;

export function stripFileExtension(str: string) {
  return str.split(".").slice(0, -1).join(".");
}


/**
 * Turns string into url slug.
 * @param text
 * @returns
 */
function slugify(text: string): string {
  return text.toLowerCase().replace(/ /g, "-");
}

/**
 * Returns page name without .md / .mdx
 * @param page
 * @returns
 */
function getPageName(page: string): string {
  return page.replace(/\.md$/, "").replace(/\.mdx$/, "");
}

interface ManifestItem {
  name: string;
  content: (string | ManifestItem)[];
}

export interface TreeNavigationItem {
  title: string;
  path: string;
  subItems: TreeNavigationItem[];
}

const pages = await getCollection("docs");

/**
 * Recursively parses a manfiest section, turning it into a navigation tree.
 * @param section
 * @param navItem
 * @returns
 */
export function parseManifestSection(
  section: ManifestItem,
  navItem: TreeNavigationItem | undefined
): TreeNavigationItem {
  if (!navItem) navItem = { title: "root", path: "", subItems: [] };

  for (let it of section.content) {
    if (typeof it === "string") {
      // Page -> Find page file
      const page = pages.find((e) => "/" + e.id === navItem!.path + "/" + it);
      if (!page)
        throw new Error("Could not find page for manifest item @ " + navItem.path + "/" + it);
      const newNavItem: TreeNavigationItem = {
        title: page.data.title || stripFileExtension(it), //item,
        path: navItem.path + "/" + stripFileExtension(it),
        subItems: []
      };
      navItem.subItems.push(newNavItem);
    } else {
      navItem.subItems.push(
        parseManifestSection(it, {
          title: it.name,
          path: navItem.path + "/" + slugify(it.name),
          subItems: []
        })
      );
    }
  }
  return navItem;
}

interface OrderedNavigationItem {
  name: string;
  path: string;
}

/**
 * Generates a list of OrderedNavigationItems, used for next / prev buttons.
 * Items in this list are ordered and sections are included as well.
 * @param manifest
 * @param basePath
 * @returns
 */
export function generateOrderedNavigationItems(
  manifest: ManifestItem[],
  basePath = ""
): OrderedNavigationItem[] {
  const navigationItems: OrderedNavigationItem[] = [];

  for (const item of manifest) {
    const sectionPath = `${basePath}/${slugify(item.name)}`;
    navigationItems.push({ name: item.name, path: sectionPath.substring(6) });

    if (Array.isArray(item.content)) {
      for (const contentItem of item.content) {
        if (typeof contentItem === "string") {
          const pagePath = `${sectionPath}/${slugify(getPageName(contentItem))}`;

          const page = pages.find((e) => "/" + e.slug === pagePath.substring(6));
          if (!page)
            throw new Error("Could not find page for manifest item @ " + pagePath.substring(6));

          navigationItems.push({
            name: page.data.title || getPageName(contentItem),
            path: pagePath.substring(6)
          });
        } else if (typeof contentItem === "object") {
          const subItems = generateOrderedNavigationItems([contentItem], sectionPath);
          navigationItems.push(...subItems);
        }
      }
    }
  }

  return navigationItems;
}
