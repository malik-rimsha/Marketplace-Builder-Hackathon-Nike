import { createClient } from 'next-sanity'


export const client = createClient({
  projectId : "554iwjc1", 
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

