function setCaret() {
  const start = this.field.selectionStart;
  const end = this.field.selectionEnd;
  this.props.value =
    start === end
      ? this.props.value.slice(0, start - 1) + this.props.value.slice(end)
      : this.props.value.slice(0, start) + this.props.value.slice(end);
  this.field.value = this.props.value;
  this.field.focus();
  this.field.selectionStart = start;
  this.field.selectionEnd = end;
}
export default setCaret;
