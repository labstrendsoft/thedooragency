'use client';

import { useEffect } from 'react';

const TitleChanger = () => {
  useEffect(() => {
    const pageTitle = document.title;
    const attentionMessage = '¡🥺No te vayas💔!';

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = attentionMessage;
      } else {
        document.title = pageTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TitleChanger;
