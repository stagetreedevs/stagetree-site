import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
    projectId,
    dataset: 'production',
    apiVersion: '2023-09-26',
    useCdn: true,
    token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source:string) => builder.image(source);
