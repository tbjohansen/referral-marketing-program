import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const initialAuthenticationState = {
    userInfo: {},
    userTokenInfo: "",
    isAuthenticated: false,
    userDetails: {},
    userToken: null
}

const storage = createJSONStorage(() => localStorage);

export const authenticationAtom = atomWithStorage('user', {
    ...initialAuthenticationState
}, storage);