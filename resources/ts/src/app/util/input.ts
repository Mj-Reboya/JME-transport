export function numOnly(event: KeyboardEvent) {
  if (!(Number.isInteger(Number(event.key)) || event.key === 'Backspace')) {
    event.preventDefault();
  }
}
