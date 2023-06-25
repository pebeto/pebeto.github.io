function dateDiff(first: Date, second: Date): number {
  const first_timestamp: number = new Date(first).valueOf();
  const second_timestamp: number = new Date(second).valueOf();

  return Math.round(
      (second_timestamp - first_timestamp) / (1000 * 60 * 60 * 24)
  );
}

export default function getDaysSinceDate(dateString: string): number {
  return dateDiff(new Date(dateString), new Date());
}
