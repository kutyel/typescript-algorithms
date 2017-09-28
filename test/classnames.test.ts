import cn from '../src/classnames'

describe('Class names', () => {
  it('should concatenate an array of class names', () =>
    expect(cn('btn', 'button', 'button-primary')).toBe(
      'btn button button-primary'
    ))

  it('should concatenate an array of class names', () =>
    expect(
      cn(
        'btn',
        { button: true },
        { 'button-primary': false },
        { button: false, 'button-primary': true }
      )
    ).toBe('btn button button-primary'))

  it('should ignore falsy values as classnames', () =>
    expect(cn('btn', 0, 'button', false, 'button-primary')).toBe(
      'btn button button-primary'
    ))
})
