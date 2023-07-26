interface Review {
  id: number;
  user: string;
  content: string;
}

export const fetchReviews = async (): Promise<Review[]> => {
  const response = await fetch(`http://localhost:3000/api/reviews`, {
    headers: {
        'content-type': 'application/json',
    },
    // cache: 'no-store',
    // next: {
    //     revalidate: 0,
    // }
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Network error');
}