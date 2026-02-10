# Publishing Guide

This guide explains how to publish the Secret PDF SDK to NPM.

## Prerequisites

1. **NPM Account**: You need an NPM account. Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **Login to NPM**: Run `npm login` and enter your credentials
3. **Organization Access**: Ensure you have access to the `@secretpdf` organization on NPM (if using scoped package)

## Pre-Publish Checklist

Before publishing, make sure:

- [x] All tests pass (if you have tests)
- [x] Version number is updated in `package.json`
- [x] `CHANGELOG.md` is updated with changes
- [x] `README.md` is complete and accurate
- [x] Build succeeds: `npm run build`
- [x] Package contents are correct: `npm pack --dry-run`

## Publishing Steps

### 1. Clean and Build

```bash
# Clean previous builds
npm run clean

# Install dependencies
npm install

# Build the package
npm run build
```

### 2. Test the Package Locally

Test the package before publishing:

```bash
# Create a tarball
npm pack

# In another project, install the tarball to test
npm install /path/to/secretpdf-sdk-1.0.0.tgz
```

### 3. Publish to NPM

#### First Time Publishing

```bash
# For public scoped package
npm publish --access public

# For private scoped package (requires paid NPM account)
npm publish
```

#### Subsequent Releases

1. Update version in `package.json`:
   ```bash
   # For patch release (1.0.0 -> 1.0.1)
   npm version patch
   
   # For minor release (1.0.0 -> 1.1.0)
   npm version minor
   
   # For major release (1.0.0 -> 2.0.0)
   npm version major
   ```

2. Push the version tag to git:
   ```bash
   git push && git push --tags
   ```

3. Publish:
   ```bash
   npm publish --access public
   ```

## Post-Publish

After publishing:

1. Verify the package on NPM: https://www.npmjs.com/package/@secretpdf/sdk
2. Test installation in a clean project:
   ```bash
   npm install @secretpdf/sdk
   ```
3. Update documentation if needed
4. Announce the release

## Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version (1.0.0 -> 2.0.0): Breaking changes
- **MINOR** version (1.0.0 -> 1.1.0): New features, backward compatible
- **PATCH** version (1.0.0 -> 1.0.1): Bug fixes, backward compatible

## NPM Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run clean` - Remove dist directory
- `npm run sdk` - Regenerate API from OpenAPI spec
- `npm pack --dry-run` - Preview package contents
- `npm publish --access public` - Publish to NPM

## Troubleshooting

### Package Name Already Exists

If `@secretpdf/sdk` is taken, either:
- Request access to the @secretpdf organization
- Use a different scope: `@yourusername/secretpdf-sdk`
- Use an unscoped name: `secretpdf-client-sdk`

Update the `name` field in `package.json` accordingly.

### Authentication Issues

```bash
# Check who you're logged in as
npm whoami

# Logout and login again
npm logout
npm login
```

### Version Already Published

You cannot republish the same version. Update the version:

```bash
npm version patch
npm publish --access public
```

## Useful Commands

```bash
# View package info
npm view @secretpdf/sdk

# View all published versions
npm view @secretpdf/sdk versions

# Deprecate a version
npm deprecate @secretpdf/sdk@1.0.0 "Please upgrade to 1.0.1"

# Unpublish (only within 72 hours, discouraged)
npm unpublish @secretpdf/sdk@1.0.0
```

## Setting up CI/CD (Optional)

For automated publishing with GitHub Actions, create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add your NPM token as a secret in your GitHub repository settings.
