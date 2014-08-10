# Bulkify with Gulp
Browserify does not support dynamic require statements. One way to solve this problem is to use Bulkify and Gulp tasks
to transform inline bulk-require calls into statically resolvable require maps.