import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useRoverState from '../useRoverState';

describe('[tc-rover - useRoverState]', () => {
  it('should set the initial state.', () => {
    expect(render().current).toMatchInlineSnapshot(`
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `);
  });

  it('should initialize state with current ref.', () => {
    const state = { currentId: 'foo' };

    expect(render(state).current).toMatchInlineSnapshot(
      state,
      `
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `
    );
  });

  it('should initialize state with orientation.', () => {
    const state = { orientation: 'horizontal' };

    expect(render(state).current).toMatchInlineSnapshot(
      state,
      `
              Object {
                "currentId": null,
                "first": [Function],
                "infinite": false,
                "last": [Function],
                "move": [Function],
                "next": [Function],
                "orientation": "horizontal",
                "previous": [Function],
                "previousId": null,
                "register": [Function],
                "reset": [Function],
                "tabStops": Array [],
                "unregister": [Function],
              }
          `
    );
  });

  it('should register an element.', () => {
    const result = render();

    act(() => result.current.register('foo', createRef('foo')));

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `);
  });

  it('should register a duplicate ref.', () => {
    const id = 'foo';
    const result = render();
    const ref = createRef(id);

    act(() => result.current.register(id, ref));
    act(() => result.current.register(id, ref));

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `);
  });

  it('should register ref as currentId.', () => {
    const id = 'foo';
    const result = render({ currentId: id });

    act(() => result.current.register(id, createRef(id)));

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `);
  });

  it('should unregister a ref.', () => {
    const id = 'foo';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.unregister(id));

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `);
  });

  it('should unregister a non-existent ref.', () => {
    const result = render();

    act(() => result.current.unregister('foo'));

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `);
  });

  it('should unregister the currentId.', () => {
    const id = 'foo';
    const result = render({ currentId: id });

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.unregister(id));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: null,
        tabStops: []
      },
      `
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `
    );
  });

  it('should unregister a previousId.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render({ currentId: idx, previousId: id });

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.unregister(id));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: null
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move once.', () => {
    const id = 'foo';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.move(id));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: id
      },
      `
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move twice.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(id));
    act(() => result.current.move(idx));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: id
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "foo",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to the same ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(idx));
    act(() => result.current.move(idx));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: idx
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "bar",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to null.', () => {
    const id = 'foo';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.move(id));
    act(() => result.current.move(null));

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: null,
        previousId: id
      },
      `
      Object {
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "foo",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to the next ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(id));
    act(() => result.current.next());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: id
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "foo",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should always move to the next ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render({ infinite: true });

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(id));
    act(() => result.current.next());
    act(() => result.current.next());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: id,
        previousId: idx
      },
      `
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": true,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "bar",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to the previous ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(idx));
    act(() => result.current.previous());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: id,
        previousId: idx
      },
      `
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "bar",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should always move to previous ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render({ infinite: true });

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.move(id));
    act(() => result.current.previous());
    act(() => result.current.previous());
    act(() => result.current.previous());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: id
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": true,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": "foo",
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to the first ref.', () => {
    const id = 'foo';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.first());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: id,
        previousId: null
      },
      `
      Object {
        "currentId": "foo",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });

  it('should move to the last ref.', () => {
    const id = 'foo';
    const idx = 'bar';
    const result = render();

    act(() => result.current.register(id, createRef(id)));
    act(() => result.current.register(idx, createRef(idx)));
    act(() => result.current.last());

    expect(result.current).toMatchInlineSnapshot(
      {
        currentId: idx,
        previousId: null
      },
      `
      Object {
        "currentId": "bar",
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": undefined,
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "tabStops": Array [
          Object {
            "id": "foo",
            "ref": Object {
              "current": <div
                id="foo"
              />,
            },
          },
          Object {
            "id": "bar",
            "ref": Object {
              "current": <div
                id="bar"
              />,
            },
          },
        ],
        "unregister": [Function],
      }
    `
    );
  });
});

function render(...args) {
  return renderHook(() => useRoverState(...args)).result;
}

function createRef(id) {
  const ref = React.createRef();
  ref.current = document.createElement('div');
  ref.current.id = id;
  return ref;
}
