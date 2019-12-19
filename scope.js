const a = 1; b = 2, c = 3;

(function firstfunction () {
  const b = 5; const c = 6;

  (function secondfunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdfunction () {
      const a = 7; const c = 9;

      (function fourthfunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

