import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type PostResult = Extract<
  QueryDatabaseResponse["results"][number],
  { properties: Record<string, unknown> }
>;

type PropertyValueMap = PostResult["properties"];
type PropertyValue = PropertyValueMap[string];

type PropertyValueType = PropertyValue["type"];

type ExtractedPropertyValue<TType extends PropertyValueType> = Extract<
  PropertyValue,
  { type: TType }
>;

export type PropertyValueTitle = ExtractedPropertyValue<"title">;
export type PropertyValueRichText = ExtractedPropertyValue<"rich_text">;
export type PropertyValueMultiSelect = ExtractedPropertyValue<"multi_select">;
export type PropertyValueDate = ExtractedPropertyValue<"date">;
export type PropertyValueCheck = ExtractedPropertyValue<"checkbox">;
export type PropertyValueFormula = ExtractedPropertyValue<"formula">;
export type PropertyValuePeople = ExtractedPropertyValue<"people">;

/** Extract person from people **/
export type PropertyValuePerson = Extract<
  PropertyValuePeople["people"][number],
  { type: "person" }
>;

/** Extract string from formula **/
export type PropertyValueFormulaDate = Extract<
  PropertyValueFormula["formula"],
  { type: "string" }
>;

export type BlogPostInDB = PostResult & {
  properties: {
    Author: PropertyValuePeople;
    Description: PropertyValueRichText;
    FormatDate: { formula: PropertyValueFormulaDate };
    Published: PropertyValueCheck;
    Slug: PropertyValueRichText;
    Tags: PropertyValueMultiSelect;
    Title: PropertyValueTitle;
  };
};
