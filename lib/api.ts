import sanity from 'sanity';

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

export const getPosts = async () => {
  const results = await sanity.fetch(
    `*[_type == "post" && publishedAt < now()]|order(publishedAt desc) { title, slug, "author": author->name, body, publishedAt }`,
  );

  return getUniquePosts(results);
};

export const getPost = async (slug: string) => {
  return await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    "author": author->name,
    body,
    publishedAt
  }`,
    { slug },
  );
};
