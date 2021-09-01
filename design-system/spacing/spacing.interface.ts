type Large = 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;

type Small = 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;

type Measure = "px";

type Unit = "SMALL" | "MEDIUM";

export type Spacing = Record<
  "SMALL",
  Record<`${Small}${Measure}`, `${Small}${Measure}`>
> &
  Record<"MEDIUM", Record<`${Large}${Measure}`, `${Large}${Measure}`>>;
