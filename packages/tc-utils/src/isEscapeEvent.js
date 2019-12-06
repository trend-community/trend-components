function isEscapeEvent(event) {
  return event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27;
}

export default isEscapeEvent;
