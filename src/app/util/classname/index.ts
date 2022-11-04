export function clsx(record: Record<string, boolean>) {
  return Object.entries(record)
    .filter(([className, isOn]) => isOn)
    .map(([className, isOn]) => className)
    .join(' ');
}
