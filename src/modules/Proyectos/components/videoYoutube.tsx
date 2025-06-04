'use client';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function getYouTubeID(url: string): string {
  const regex = /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url?.match(regex);
  return match ? match[1] : '';
}

function isShort(url: string): boolean {
  return url.includes('/shorts/');
}

const YoutubeLite = ({ url }: { url: string }) => {
  if (!url) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-[#000000cc] shadow-md">
        no hay video
      </div>
    );
  }

  const short = isShort(url);
  const aspectRatio = short ? 'aspect-[9/16]' : 'aspect-video'; // vertical vs horizontal

  return (
    <div className={`relative w-full ${aspectRatio}`}>
      <LiteYouTubeEmbed
        id={getYouTubeID(url)}
        wrapperClass="yt-lite rounded-lg h-full w-full cursor-pointer"
        title="YouTube Video"
        cookie={false}
      />
    </div>
  );
};

export default YoutubeLite;
