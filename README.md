# epic-async

lightweight async foreach thing with typings written at 1am.

```ts
import { forEach } from 'epic-async';

// each task takes a different amount of time to complete
const array = [1000, 5000, 100, 2000];

async function go() {
    // however, it will not continue until the previous iteration completes
    // you can also use .then instead of await if you want but i don't see why you'd do that
    // or you could do neither
    await forEach(array, async (value, callback, i) => {
        console.log(`wait for ${value}ms. index: ${i}`);
        await stall(value as number); // stall/wait "value" milliseconds before continuing to the next value in the array
        callback();
    });
    console.log('done');
}

function stall(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

go();
```
```
wait for 1000ms. Index: 0
wait for 5000ms. Index: 1
wait for 100ms. Index: 2
wait for 2000ms. index: 3
done
```