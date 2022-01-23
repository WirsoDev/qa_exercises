import CircularBuffer from './circular-buffer';

describe('CircularBuffer', () => {

  test('reading empty buffer should return error', () => {
    const buffer = new CircularBuffer(1);
    expect(() => buffer.read()).toThrow('The buffer is Empty');
  });

  test('read buffer should return oldest item', () => {
    const buffer = new CircularBuffer(2);
    buffer.write(1)
    buffer.write(2)
    expect(buffer.read()).toBe(1);
  });

  test('add item to full buffer should return error', ()=>{
    const buffer = new CircularBuffer(1);
    buffer.write('1')
    expect( () => buffer.write('1')).toThrow('The buffer is Full')
  })

  test('can read an item just written', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
  });

  test('clear buffer should return empty buffer', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    buffer.clear();
    expect(buffer.isEmpty()).toBe(true);
  });

  test('force write should overweight the oldest value', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    buffer.forceWrite('3')
    expect(buffer.read()).toBe('3');
  });

  test('force write to non-empty buffer should just write', () => {
    const buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.forceWrite('3')
    expect(buffer.read()).toBe('1');
  });

  test('write invalid value should return error', () => {
    const buffer = new CircularBuffer(1);
    expect(() => buffer.write(null)).toThrow('Invalid value');
  });

});

