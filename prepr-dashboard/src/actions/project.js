import {
    CREATE_PROJECT_FAIL,
    CREATE_PROJECT_SUCCESS
} from './types'
import store from '../store'
export const create_project = (id, title, description, activeChallenge, imgURL) =>
    ({
        type: CREATE_PROJECT_SUCCESS,
        payload: {
            id: id,
            title: title,
            description: description,
            activeChallenge: activeChallenge,
            imgURL: imgURL
        }
    })
