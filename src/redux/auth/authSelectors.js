export const selectUserEmail = state => state.auth.user.email;

export const selectIsLoggedin = state => state.auth.isLoggedIn;

export const selectUserInfo = state => state.auth.user;

export const selectUserBlood = state => state.auth.user.blood;

export const selectUserCalories = state => state.auth.user.calories;

export const selectIsFetching = state => state.auth.isFetching;

export const selectToken = state => state.auth.token;

export const selectError = state => state.auth.error;

export const selectAvatarUrl = state => state.auth.user.avatarURL;

export const selectLevelActivity = state => state.auth.user.levelActivity;

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsProfileComplete = state => state.auth.isProfileComplete;

export const selectIsImageLoading = state => state.auth.isImageLoading;

export const selectRegisterDate = state => state.auth.user.registerDate;
