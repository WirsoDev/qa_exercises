//Buffer/

class CircularBuffer {
  constructor(size = 7) { // set size to fixed value of 7 if not given
    this._size = size
    this._buffer = []
  }

  write(value, overweight = false) {
    if (!this.isValueValid(value)) {
      new InvalidValueError()
    }
    if (this.isFull() && !overweight) {
       new BufferFullError()
    }
    if (overweight) {
      this._buffer.shift() // overweight oldest item
    }
    this._buffer.push(value);
    return null
  }

  read() {
    if (this.isEmpty()) {
       new BufferEmptyError()
    }
    return this._buffer.shift()
  }

  forceWrite(value) {
    if (!this.isFull()) { // if buffer not full just write
      this.write(value);
    } else {
      this.write(value, true);
    }
  }

  clear() {
    this._buffer = []
  }


  // helper methods

  isEmpty() {
    return this._buffer.length === 0;
  }

  isValueValid(value) {
    return value !== undefined && value !== null;
  }

  isFull() {
    return this._buffer.length === this._size
  }
}


// custom errors //

class BufferFullError extends Error {
  constructor() {
    throw new Error(
      'The buffer is Full'
    );
  }
}

class BufferEmptyError extends Error {
  constructor() {
    throw new Error(
      'The buffer is Empty'
    );
  }
}

class InvalidValueError extends Error {
  constructor(){
    throw new Error(
      'Invalid value'
    );
  }
}


export default CircularBuffer
