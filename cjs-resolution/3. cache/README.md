"on case-insensitive file systems or operating systems, different resolved
filenames can point to the same file, but the cache will still treat them as
different modules and will reload the file multiple times. For example,
require('./foo') and require('./FOO') return two different objects, irrespective
of whether or not ./foo and ./FOO are the same file."

Me encantaría probar un sistema operativo con direcciones (paths) que sean
sensibles a las mayúsculas (case sensitives) para poder incorporarle en un
artículo.

Intenté importar `a.js` desde `c/index.js` para poder ver si resolvía algún path
distinto. No fue el caso, no comprendería bien en qué circunstancias dentro de
`node_modules` podría ocurrir. También me gustaría resolverlo.

"Modules are cached based on their resolved filename. Since modules may resolve
to a different filename based on the location of the calling module (loading
from node_modules folders), it is not a guarantee that require('foo') will
always return the exact same object, if it would resolve to different files."