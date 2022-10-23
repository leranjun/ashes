# ashes

Reproduction repo for [Skeleton]([Brain-Bones/skeleton](https://github.com/Brain-Bones/skeleton)) with Yarn v3 workspaces (PNP disabled). See [#420](https://github.com/Brain-Bones/skeleton/issues/420).

Created with `yarn init -2`. See [`.yarnrc.yml`](.yarnrc.yml) for configuration.

## Problem

### Expected behaviour

After creating and running the `ui` workspace as described in [the README](packages/ui/README.md), a functional demo page should be displayed.

![A screenshot of the expected page](https://i.imgur.com/m5NXhWY.png)

### Actual behaviour

It can be seen that the layout is not styled properly. Tailwind seems to be applied only partially.

![A screenshot of the broken layout](https://i.imgur.com/m5NXhWY.png)

### Additional information

No visible errors or warnings are shown with `vite dev`, `vite build` or in the browser console.

One interesting observation is that Vite creates a `node_modules` folder at the workspace level (`packages/ui/node_modules/.vite/deps`) instead of the repo/project level.

### Workaround

By setting `nmHoistingLimits: workspaces` in `.yarnrc.yml`, this problem can be fixed. Is there any package that's referencing a dependency that's not hoisted to the project level?
