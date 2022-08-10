
# My Site

Previously built with React-Static. Now built with Elder.js and Svelte to test SEO functionality and development experience with Elder JS.

Site is static and hosted in S3 (at the moment).

## TODO

### Content

1. Update blurb
2. Add recent projects
3. Update Experience

### Deployment

1. Check redirect from www in cloudfront
   - Apparently not possible to redirect www to non-www in CloudFront. Can be done with a secondary S3 bucket.
2. 404 page

### Dev

1. Set numbercolumn highlight to middle of page on initial load
   - This is usefule for mobile
2. Use em for top margin
3. Fix font size for ElderJS in footer
4. Review and potentially fix increasing left margin to account for number column
   - This means making body not centered slightly
   - Probably should only be done on smaller screens
5. Review optional loading of inconsolata on first page load
