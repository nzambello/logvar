// @ts-nocheck

import logvar from '../src/main';

global.console.log = jest.fn();

describe('logvar function', () => {
  const name = 'John';
  const hello = ['world', '!'];
  const lorem = { placeholder: 'ipsum' };
  const life = 42;

  it('should log a variable', () => {
    logvar({ name });
    expect(global.console.log).toHaveBeenCalledWith(`name: `, 'John');
  });

  it('should log an array', () => {
    logvar({ hello });
    expect(global.console.log).toHaveBeenCalledWith(`hello: `, ['world', '!']);
  });

  it('should log an object', () => {
    logvar({ lorem });
    expect(global.console.log).toHaveBeenCalledWith(`lorem: `, { placeholder: 'ipsum' });
  });

  it('should log variable value', () => {
    logvar(life);
    expect(global.console.log).toHaveBeenCalledWith(42);
  });

  it('should log multiple variables', () => {
    logvar({ name, hello, lorem, life });
    expect(global.console.log).toHaveBeenCalledTimes(4);
  });
});
