// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

// export default function rating() {
//   return (
//     <Stack spacing={1}>
//       <Rating name="size-large" defaultValue={0} size="large" />
//     </Stack>
//   );
// }


import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
  )
}
