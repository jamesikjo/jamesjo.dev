import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlogPostInDB } from "../../types/notion/Properties";
import { Block } from "../../types/notion/Block";
import { BlogProperties } from "../../types/notion/Interface";
import { extractBlogPost } from "./extractBlogPost";

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID || "";

const notion = new Client({
  auth: token,
});

//Retrieve properties from all blog posts from Notion database table
export const getBlogPostProperties = async (): Promise<BlogProperties[]> => {
  if (!databaseId) {
    throw new Error(`No database found ${databaseId}`);
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId,
    // Filter out posts that not checked to publish.
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    // Sort posts in descending order based on the Date.
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const posts: BlogProperties[] = response.results
    .map((post) => post as BlogPostInDB)
    .map((postInDB) => extractBlogPost(postInDB));

  return posts;
};

//Retrieve a single blog post property
export const getSingleBlogProperty = async (
  slug: string
): Promise<BlogProperties[]> => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 1,
    filter: {
      property: "Slug",
      rich_text: {
        contains: slug,
      },
    },
  });

  const post: BlogProperties[] = response.results
    .map((post) => post as BlogPostInDB)
    .map((postInDB) => extractBlogPost(postInDB));

  return post;
};

//get blog post contents (blocks) using blockId (aka blog post_id)
//page content is organized into array of blocks
export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const blocks: Block[] = [];

  let response = await notion.blocks.children.list({
    block_id: blockId,
  });

  response.results.map((block) => {
    blocks.push(block as Block);
  });

  while (response.has_more && response.next_cursor) {
    response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 25,
      start_cursor: response.next_cursor,
    });
    response.results.map((block) => {
      blocks.push(block as Block);
    });
  }
  return blocks;
};
