type Progress = {
xp: number;
level: number;
streak: number;
badges: { name: string; earned: boolean }[];
};

export function defaultProgress(): Progress {
return {
xp: 250,
level: 3,
streak: 5,
badges: [
{ name: "Hello World", earned: true },
{ name: "Math Wizard", earned: true },
{ name: "Variable Master", earned: true },
{ name: "Turtle Artist", earned: false },
],
};
}

export function addXP(p: Progress, amount: number) {
p.xp += amount;
while (p.xp >= p.level * 200) {
p.xp -= p.level * 200;
p.level += 1;
}
}