const A = [1, 1, 1, 1, 0, 0, 0];
const B = [1, 1, 1, 1, 0, 1, 0];
const C = new Array(A.length + 1).fill(0);

for (let i = 0; i < A.length; i++) {
  const j = A.length - 1 - i;
  const k = j + 1;

  C[k - 1] = Math.floor((A[j] + B[j] + C[k]) / 2);
  C[k] = Math.floor((A[j] + B[j] + C[k]) % 2);
}

console.log(C);
