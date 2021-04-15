"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var insertion_sort_1 = __importDefault(require("./insertion-sort"));
var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("before: ", arr);
console.log("after: ", insertion_sort_1.default(arr));
