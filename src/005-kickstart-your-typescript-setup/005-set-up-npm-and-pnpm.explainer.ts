// Explain pnpm

/**
 * Pnpm is a package manager which focuses on storing all the packages source code at one place
 * in user's computer. Installing a package for a workspace actually installs it to the storage
 * at some root directory of a computer. There are symlinks in a workspace that are pointed into
 * according packages at the root storage. This way of package source code management optimizes
 * the storage size, because same packages used in several workspaces are pointed to only one
 * directory at the root storage. This sort of optimization works best in monorepos.
 */

// Explain why pnpm is better than npm

/**
 * NPM downloads packages source code into each workspace folder so that the downloaded code
 * takes the double computer storage size for the same packages used in several workspaces.
 *
 * PNPM download packages source code into one storage at some root directory of a computer.
 * If same packages are used in several workspaces, symlinks allow each workspace just to
 * point out to the one package source code. That way it optimizes the computer storage.
 */
