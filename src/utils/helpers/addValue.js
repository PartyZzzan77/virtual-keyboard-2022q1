function addValue(e, value) {
  e.preventDefault();
  this.props.value += value;
  this.field.value = this.props.value;
}
export default addValue;
