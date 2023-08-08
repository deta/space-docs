---
title: Configuration
layout: "@layouts/DocsPageLayout.astro"
---

## Environment Variables

**Environment Variables** allow apps to access custom configuration at the individual app level. They are available in all non static [Micros](/docs/en/build/fundmenatals/the-space-runtime/micros) during runtime. You can create custom environment variables for your app that can be modified by the end user of the app, while Micros also come with pre-set Space system variables.

### Custom Variables

Use the `env` preset in the `Spacefile` if you need to set custom environment variables for your Micros. This can be used to let users of your app specify things like external secrets, [API Keys](/docs/en/build/guides/extending-apps#api-keys), or [Data Keys](/docs/en/build/guides/extending-apps#data-keys) of different app instances.

```yaml
micros:
  - name: api
    src: ./api/
    engine: python3.9
    presets:
      env:
        - name: SECRET_MESSAGE
          description: Secret message only available to this Micro
          default: "deta is cool"

```

- `name`: environment variable name or key
- `description`: human friendly description (optional)
- `default`: default value for the variable (optional)

The user of the app will be shown a [UI in the App's Settings](/docs/en/use/settings#configuration-variables) where they can set the values for the specified environment variables. They will be exposed to the Micro's environment under the specified `name`.

When developing locally using `space dev`, any custom environment variables that exist in the current shell environment will be passed through to the development environment, overwriting the `default` value.

### Pre-set Variables

Micros also come pre-set with environment variables, accessible on the server side of every Micro. The following variables are available:

- `DETA_PROJECT_KEY`: a [Data Key](/docs/en/build/fundamentals/data-storage#data-keys)
- `DETA_SPACE_APP`: will be set to `“true”`
- `DETA_SPACE_APP_VERSION`: the app version
- `DETA_SPACE_APP_HOSTNAME`: will be set to the **primary** hostname
- `DETA_SPACE_APP_MICRO_NAME`: your Micro's name
- `DETA_SPACE_APP_MICRO_TYPE`: will be set to `"primary"` if primary otherwise `“normal”`
- `PORT`: the port Space will route requests to on your Micro

Please let us know if you need additional configuration.