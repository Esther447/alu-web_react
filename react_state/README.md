# React State

Adding local state and event handlers to manage UI interactions in React class components.

## Task 0 — Notifications Drawer
- Added `displayDrawer` state to `App` with `handleDisplayDrawer` and `handleHideDrawer` handlers
- Passed handlers as props to `Notifications`
- Wired `onClick` on menu item and close button
- Updated `shouldComponentUpdate` to rerender on `displayDrawer` changes

## Run Tests
```bash
cd task_0/dashboard
npm test -- --runInBand
```
