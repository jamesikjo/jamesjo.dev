import { Client } from "@notionhq/client";

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: token,
});

//retrieve all blog posts from your Notion database (table)
export const getDatabase = async () => {
  const response = await notion.databases.query({
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
  return response.results;
};

//filter database to retrieve single post properties by slug name
//this will only fetch properties of the post, not block content
export const getBlogPostProperties = async (slug) => {
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
  return response.results[0];
};

//get the content of single blog post using blockId (blog post_id)
//page content is organized into array of blocks
export const getBlogContentBlocks = async (blockId) => {
  const blogPostBlocks = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 25,
  });

  return blogPostBlocks;
};
