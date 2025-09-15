import { useState } from 'react';

import star from '@assets/star.png';

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: 5 }).map((_, idx) => {
        const score = idx + 1;
        const active = score <= rating;

        return (
          <img
            key={score}
            src={star}
            alt="star"
            onClick={() => setRating(score)}
            className={`w-12 transition hover:cursor-pointer ${active ? '' : 'grayscale'}`}
          />
        );
      })}
    </div>
  );
}
