import {
    CREATE_PROJECT_FAIL,
    CREATE_PROJECT_SUCCESS
} from '../actions/types'

const initialState = [
    // {
    //     id: 1,
    //     title: "First project",
    //     description: "This is the project description",
    //     activeChallenge: "Create Project",
    //     imgURL: "imgURL.png"
    // },
]

export default function (state=initialState, action) {
    const {type, payload} = action
    switch(type) {
        case CREATE_PROJECT_SUCCESS:
            return [
                ...state,
                {
                    id: payload.id,
                    title: payload.title,
                    description: payload.description,
                    activeChallenge: payload.activeChallenge,
                    imgURL: payload.imgURL
                }
            ]
        default:
            return state
    }
}