function open() {
  this.main.classList.remove("keyboard_hidden");
  this.field.value = this.props.value;
}

export default open;
