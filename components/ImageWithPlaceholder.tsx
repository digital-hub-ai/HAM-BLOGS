import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholderColor?: string;
}

const ImageWithPlaceholder = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholderColor = 'bg-gray-200 dark:bg-gray-700'
}: ImageWithPlaceholderProps) => {
  const [isLoading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Generate a simple placeholder based on the image dimensions
  const generatePlaceholder = () => {
    if (width && height) {
      // Create a tiny SVG placeholder
      const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23e5e7eb'/%3E%3C/svg%3E`;
      return svg;
    }
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+';
  };

  if (imageError) {
    return (
      <div className={`${className} ${placeholderColor} flex items-center justify-center`}>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className={`absolute inset-0 ${placeholderColor} animate-pulse`} />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setImageError(true);
        }}
      />
    </div>
  );
};

export default ImageWithPlaceholder;