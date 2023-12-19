import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const generalAdmin = createSlice({
    name: 'generalAdmin',
    initialState: {
        showToast: false,
        typeToast: 'success',
        messageToast: ''
    },
    reducers: {
        showToast: (state, action: PayloadAction<{ showToast: boolean, messageToast: string, typeToast: string }>) => {
            state.showToast = action.payload.showToast
            state.typeToast = action.payload.typeToast
            state.messageToast = action.payload.messageToast
        }
    }
})

const categoryAdmin = createSlice({
    name: 'categoryAdmin',
    initialState: {
        sectionShow: 'account'
    },
    reducers: {
        shareSectionShow: (state, action: PayloadAction<{ sectionShow: string }>) => {
            state.sectionShow = action.payload.sectionShow
        }
    }
})

const accountAdmin = createSlice({
    name: 'accountAdmin',
    initialState: {
        errorAuth: false,
        messageErrorAuth: ''
    },
    reducers: {
        errorAuth: (state, action: PayloadAction<{ errorAuth: boolean, messageErrorAuth: string }>) => {
            state.errorAuth = action.payload.errorAuth
            state.messageErrorAuth = action.payload.messageErrorAuth
        }
    }
})

export {
    generalAdmin, categoryAdmin, accountAdmin
}