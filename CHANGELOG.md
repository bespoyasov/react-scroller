# Changelog

## 3.0.1

The MIT license file added.

## 3.0.0

New component public API, more precise animation configuration.

### Breaking Changes

- The `config` property is replaced with a set of props: `scrollbar`, `navigation`, `align`, `onItemClick`.

### New Features

- The `duration` prop specifies animation duration when changing the `position`.
- At the first render, `position` and `duration` props describe [start animation](https://github.com/bespoyasov/scroller#configuration) settings.
- At the next renders, `position` and `duration` describe the [`scrollTo`](https://github.com/bespoyasov/scroller#position-change) settings.

## 2.0.0

Dependency refresh, upgraded Scroller use, performance and style improvements.

### Breaking Changes

- Migrated to ES Module.
- Updated public API for the component config. For more info check out the [migration guide](https://github.com/bespoyasov/scroller/blob/master/CHANGELOG.md#v300) in Scroller repo.

### New Features

- Added `position` property to change Scroller's current position via props.
- Added typings for the component.

## 1.2.12

Updated `npm` package contents. Fixed script resolution.
