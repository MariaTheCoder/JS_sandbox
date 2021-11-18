function knights(ranks, p, r) {
  console.log(`Seated knights excl. Garahat: ${ranks}`);
  ranks.splice(p, 0, r);
  console.log(`Seated knights incl. Garahat: ${ranks}`);

  if (p === 0) {
    if (ranks[p + 1] === r && ranks[ranks.length - 1] === r) {
      ranks.splice(p, 2);
      ranks.splice(ranks.length - 1, 1, r + 2);
    }
  }
  console.log(`Test 1: ${ranks}`);

  while (ranks[p - 1] === r && ranks[p + 1] === r) {
    ranks.splice(p, 2);
    ranks.splice(p - 1, 1, r + 2);
  }

  while (ranks[p - 1] === r) ranks.splice(p - 1, 2, r + 1);
  console.log(`Test 2: ${ranks}`);

  while (ranks[p + 1] === r) ranks.splice(p, 2, r + 1);
  console.log(`Test 3: ${ranks}`);

  for (let i = 0; i < ranks.length; i++) {

    if(i === 0) {
      if(ranks(i+1) === r && ranks[ranks.length-1] === r) {
        ranks.splice(p, 2);
      }
    }

    while (ranks[i - 1] === ranks[i] && ranks[i + 1] === ranks[i])
      ranks.splice(i - 1, 3, ranks[i] - 1);
    while (ranks[i + 1] === ranks[i]) ranks.splice(i, 2, ranks[i] + 1);
    while (ranks[i - 1] === ranks[i]) ranks.splice(i - 1, 2, ranks[i] + 1);
  }

  return console.log(ranks.length);
}

knights([9, 7, 5, 3, 1], 0, 1);
