import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const counter = (state: RootState) => state.counter
export const counterSelector = createSelector(counter, (state) => state.count)