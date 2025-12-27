export type GameType = "ys" | "zzz" | "sr"; // 原神、绝区零、崩铁
export const gameNameMap: Record<GameType, string> = {
    "ys": "原神",
    "zzz": "绝区零",
    "sr": "崩坏：星穹铁道",
}