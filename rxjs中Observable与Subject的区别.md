```javascript
    var subject = new Subject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(1);
    subject.next(2);

    var observable = new Observable((o) => {
      o.next(1);
      o.next(2);
    });

    observable.subscribe(x => console.log("A: " + x));
    observable.subscribe(x => console.log("B: " + x));
```