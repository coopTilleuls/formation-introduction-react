import styles from './AddReview.module.css';
import {Form, useActionData} from 'react-router-dom';
import {useEffect, useReducer, useRef} from 'react';

export const AddReview = () => {
    const actionData = useActionData();
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

    useEffect(() => {
        // form has not been submitted yet
        if (actionData === undefined) {
            return;
        }

        const response = JSON.parse(actionData);

        switch(response['@type']) {
            case 'ConstraintViolationList': {
                dispatch({type: 'setErrors', errors:
                      response.violations.reduce((prev, current) => {
                          return {
                              ...prev,
                              [current.propertyPath]: current.message,
                          }
                      }, {})
                });
            }break;
            case 'hydra:Error': {
                dispatch({type: 'setErrors', errors: {global: response.detail}});
            }break;
            default: {
                // form submit is OK
                dispatch({type: 'setAdded'});
            }
        }
    }, [actionData]);

    return (
        <Form className="add-review" method="POST" ref={form}>
            {!!state.added && <p className={styles.added}>Votre commentaire a été enregistré avec succès.</p>}
            {!!state.errors.global && <p className={styles.error}>Vous devez être authentifié pour poster un commentaire.</p>}
            <label className={styles.field}>
                <span className={styles['label-text']}>Votre nom</span>
                <input type="text" name="author" className={styles.input} />
            </label>
            <label className={styles.field}>
                <span className={styles['label-text']}>Note</span>
                <select name="rating" className={styles.input} >
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
                <textarea name="body" className={`${styles.input} ${state.errors.body ? styles['has-error'] : undefined}`}></textarea>
                {state.errors.body && <span className={styles.error}>{state.errors.body}</span>}
            </label>
            <input type="submit" value="Poster le commentaire" className={styles.submit} />
        </Form>
    );
}
