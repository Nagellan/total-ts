// Explain Diagram

/**
 * The diagram describes a cooperation between IDE user and a TS Server.
 * Both user and server work together on preventing possible mistakes in code.
 * TS Server is constantly watching for modifications in files made
 * by user, checking them on possible TypeScript mistakes and showing
 * them right in the IDE by underlying the exact places of mistakes.
 * Then, user sees the errors and fixes them. TS Server once again
 * checks the errors on modifications and removes red underlines.
 *
 * This is a TypeScript code writing cycle for user running an IDE
 * that supports a TS language server, and TS language server itself working.
 */
