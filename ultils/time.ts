export function wait(minute: number) {
  return new Promise((resolve: any, reject) => setTimeout(() => resolve(), minute * 1000));
}
