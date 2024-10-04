import styles from './BookReviews.module.css';
import {formatDate} from '@/utils/date';
import {useParams} from 'next/navigation';
import {useGetSWR} from '@/utils/api';

export const BookReviews = () => {
    const {id} = useParams();
    const {isLoading, data: reviews} = useGetSWR(`/books/${id}/reviews.jsonld`);

    if (isLoading) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            {reviews.members.map((review) => (
                <div className={styles.review} key={review['@id']}>
                    <blockquote className={styles.message}>
                        {review.body}
                    </blockquote>
                    <p className={styles.author}>
                        par {review.author}, le {formatDate(review.publishedAt)}
                    </p>
                </div>
            ))}
        </div>
    );
}
