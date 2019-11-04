import { useCallback, useState, useEffect } from 'react';

export default () => {
  const [mentions, setMentions] = useState([]);

  const retrieveWebmentions = useCallback(async () => {
    const webMentionsUrl = new URL('https://webmention.io/api/mentions.jf2');
    webMentionsUrl.searchParams.append('target', window.location.href);

    if (!process.env.WEBMENTION_API_KEY) {
      return;
    }

    webMentionsUrl.searchParams.append('token', process.env.WEBMENTION_API_KEY);
    setMentions(
      await fetch(webMentionsUrl.toString())
        .then(response => response.json())
        .then(data => data.children),
    );
  }, []);

  useEffect(() => {
    retrieveWebmentions();
  }, [retrieveWebmentions]);

  return mentions;
};
