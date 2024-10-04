'use client';

import {BookView} from '@/features/books';
import {useGetSWR} from '@/utils/api';

const Page = () => {
  return (
    <BookView />
  );
}

export default Page;
