import {useLoaderData} from 'react-router-dom';
import styles from './BookReviews.module.css';
import {formatDate} from '../../../../utils/date';

export const BookReviews = () => {
    const {reviews} = JSON.parse(useLoaderData());

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
