import {RootState} from "../../app/store";
import {createSelector} from "@reduxjs/toolkit";

// сложные селекторы, это селекторы в которых  мы делаем сортировку / фильтрацию или сложные вычисления
// если бэк не обрабатывает, через квери параметры

export const selectCardPacks = (state: RootState) => state.packs.cardPacks
export const selectPage = (state: RootState) => state.packs.page


// export const filteredByNamePacksSelector = (state: RootState) => {
//     console.log("filteredByNamePacksSelector");
//     const packs = state.packs.cardPacks;
//     return packs.filter((p) => p.name.includes("sa"));
// };



// при слож селесторах нужно применять createSelector, чтобы избезать лишних рендеров соскдних компанент(баг) из не дорабокки при сложном селесторе
// createSelector мемоизирут под капотомб если не изменился массив
export const filteredByNamePacksSelector = createSelector(
    // 1 - массив селекторов
    [selectCardPacks, selectPage],
    // 2 - функция, которая принимает данные от селекторов и возвращает новое значение
    (packs, page) => {
        console.log("filteredByNamePacksSelector");
        return packs.filter((p) => p.name.includes("w"));
    }
);