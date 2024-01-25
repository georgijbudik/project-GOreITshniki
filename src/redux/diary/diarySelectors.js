export const selectDayInfo = state => state.dayInfo;

export const selectDiaryProducts = state => state.diary.products;
export const selectDiaryExercises = state => state.diary.exercises;
export const selectDiaryDate = state => state.diary.date;
export const selectConsumedCalories = state => state.diary.consumedCalories;
export const selectBurnedCalories = state => state.diary.burnedCalories;
export const selectSportSeconds = state => state.diary.sportSeconds;
export const selectIsLoading = state => state.diary.isFetching;
