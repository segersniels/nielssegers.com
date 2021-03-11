import sanityClient from '@sanity/client';
import Post from 'types/Post';

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
});

const postFields = `
  name,
  title,
  publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`;

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export const getPosts = async (): Promise<Omit<Post, 'content'>[]> => {
  const results = await sanity.fetch(`*[_type == "post"] | order(publishedAt desc, _updatedAt desc){
    ${postFields}
  }`);

  return getUniquePosts(results);
};

export const getPost = async (slug: string): Promise<Post> => {
  return await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      ${postFields}
      content,
  }`,
    { slug },
  );
};
