import { atom } from "jotai";

type MatchState = "select" | "create" | "join";
type WatchWord = string | number;

//matching画面のコンポーネント変化のためのステータス
export const matchingStatusAtom = atom<MatchState>("select");

//あいことば
export const watchWordAtom = atom<WatchWord>(123456);
