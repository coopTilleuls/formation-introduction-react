'use server'
import {fetchPost} from '@/utils/api';

export const postReview = async (bookId, values) => {
  values.rating = +values.rating;

  const response = await fetchPost(
    `https://demo.api-platform.com/books/${bookId}/reviews`,
    {
      headers: {
        accept: 'application/ld+json',
        'Content-Type': 'application/ld+json',
      },
      method: 'post',
      body: '',
    });

  return await response.json();
}
