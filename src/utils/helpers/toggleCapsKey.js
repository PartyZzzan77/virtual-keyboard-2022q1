function toggleCapsKey(keys) {
  this.props.capsLock = !this.props.capsLock;

  keys.forEach((key) => {
    const keyNode = key;
    if (keyNode.innerHTML.length === 1) {
      keyNode.innerHTML = this.props.capsLock
        ? keyNode.innerHTML.toUpperCase()
        : keyNode.innerHTML.toLowerCase();
    }
  });
}
export default toggleCapsKey;
