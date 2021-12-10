/**
 * Combines multiple class strings into a single class string.
 * @param classes All of the classes to be comined
 * @returns A complete string of all the classes from the parameter input.
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};
