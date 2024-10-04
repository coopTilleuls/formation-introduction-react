import styles from './AddReview.module.css';
import {useEffect, useReducer, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {useAtom} from 'jotai';
import {UserContext} from '@/contexts';

export const AddReview = () => {
    const [userStore] = useAtom(UserContext);
    const {isConnected, user} = userStore;
    // const actionData = useActionData();
    // const submit = useSubmit();
    const form = useRef();
    const [state, dispatch] = useReducer((currentState, action) => {
        switch (action.type) {
            case 'setErrors':
                return {errors: action.errors, added: false};
            case 'setAdded': {
                form.current?.reset();
                return {errors: {}, added: true};
            }
            default:
                return currentState;
        }
    }, {errors: {}, added: false});
    const {formState, register, handleSubmit, setValue} = useForm({defaultValues: {
        'author': isConnected ? `${user.firstName} ${user.lastName}` : '',
        }});
    const {errors} = formState;

    useEffect(() => {
        setValue('author', (isConnected && user) ? `${user.firstName} ${user.lastName}` : '');
    }, [isConnected, user])

    // useEffect(() => {
    //     // form has not been submitted yet
    //     if (actionData === undefined) {
    //         return;
    //     }
    //
    //     const response = JSON.parse(actionData);
    //
    //     switch(response['@type']) {
    //         case 'ConstraintViolationList': {
    //             dispatch({type: 'setErrors', errors:
    //                   response.violations.reduce((prev, current) => {
    //                       return {
    //                           ...prev,
    //                           [current.propertyPath]: current.message,
    //                       }
    //                   }, {})
    //             });
    //         }break;
    //         case 'hydra:Error': {
    //             dispatch({type: 'setErrors', errors: {global: response.detail}});
    //         }break;
    //         default: {
    //             // form submit is OK
    //             dispatch({type: 'setAdded'});
    //         }
    //     }
    // }, [actionData]);

    const doSubmit = () => {
        // submit(form.current);
    }

    return (
        <form className="add-review" method="POST" ref={form} onSubmit={handleSubmit(doSubmit)}>
            {!!state.added && <p className={styles.added}>Votre commentaire a été enregistré avec succès.</p>}
            {!!state.errors.global && <p className={styles.error}>Vous devez être authentifié pour poster un commentaire.</p>}
            <label className={styles.field}>
                <span className={styles['label-text']}>Votre nom</span>
                <input
                  type="text"
                  name="author"
                  className={styles.input}
                  {...register('author', {required: 'Votre nom est requis', minLength: {value: 3, message: 'Votre nom doit comporter au moins 3 caractères'}})}
                  disabled={isConnected}
                />
                {errors?.author && <span className={styles.error}>{errors.author.message}</span>}
            </label>
            <label className={styles.field}>
                <span className={styles['label-text']}>Note</span>
                <select name="rating" className={styles.input} {...register('rating')} >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <label className={styles.field}>
                <span className={styles['label-text']}>Message</span>
                <textarea name="body" className={styles.input} {...register('body', {required: 'Vous devez saisir un commentaire'})}></textarea>
                {errors?.body && <span className={styles.error}>{errors.body.message}</span>}
            </label>
            <input type="submit" value="Poster le commentaire" className={styles.submit} />
        </form>
    );
}
