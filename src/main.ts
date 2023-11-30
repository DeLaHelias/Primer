// let val1: string | undefined;
// let val2: string | undefined = "London";
// let val3: number | undefined = 0;

// let coalesced1 = val1 ?? "fallback value";
// let coalesced2 = val2 ?? "fallback value";
// let coalesced3 = val3 ?? 100;

// console.log(`Result 1: ${coalesced1}`);
// console.log(`Result 2: ${coalesced2}`);
// console.log(`Reault 3: ${coalesced3}`);

/* ============================================ */

let count: number | undefined | null = 100;
if (count != null && count != undefined) {
  let result1: string = count.toFixed(2);
  console.log(`Result 1: ${result1}`);
}

let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2}`);
