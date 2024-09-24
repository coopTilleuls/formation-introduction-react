import {BookList} from '../components/List/BookList';
import {BookView} from '../components/View/BookView';

export const routes = [
    {
        element: <BookList/>,
        path: '/livres',
    },
    {
        element: <BookView/>,
        action: async ({params, request}) => {
            if (request.method !== 'POST') {
                return false;
            }

            const body = Object.fromEntries(await request.formData());
            body.rating = +body.rating;

            return await fetch(
                `https://demo.api-platform.com/books/${params.bookId}/reviews`,
                {
                    headers: {
                        accept: 'application/ld+json',
                        'Content-Type': 'application/ld+json',
                    },
                    method: 'post',
                    body: JSON.stringify(body),
                });
        },
        loader: async ({params}) => {
            const book = await fetch(`https://demo.api-platform.com/books/${params.bookId}.jsonld`)

            if (book.status === 404) {
                throw new Response("Not Found", {status: 404});
            }

            const reviews = await fetch(`https://demo.api-platform.com/books/${params.bookId}/reviews.jsonld?order[publishedAt]=DESC`)

            return new Response(JSON.stringify({
                book: await book.json(),
                reviews: await reviews.json(),
            }));
        },
        path: '/livres/:bookId',
    }
]
