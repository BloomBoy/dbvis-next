import { createClient } from "contentful";

const client = createClient({
  space: "pzt5zr5p8m4g", // ID of a Compose-compatible space to be used \
  accessToken: "fwtY7KOtxHkE_kf6rAwVamlyV-XcKWEAN5PqUsoqmRs", // delivery API key for the space \
});

export async function getPage(params) {
  const query = {
    limit: 1,
    include: 10,
    content_type: params.pageContentType,
    "fields.subheader1": params.slug,
  };
  const page = await client.getEntries(query);

  return page || null;
}
