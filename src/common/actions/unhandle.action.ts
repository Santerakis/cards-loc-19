import { createAction } from "@reduxjs/toolkit";

export const unHandleAction = createAction<void>("common/unHandleAction");

export const commonActions = {unHandleAction}