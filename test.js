const stripAccented = require('.')
const sinon = require('sinon')

describe('housekeeping', () => {
  it('should be defined as a function', () =>  {
    expect(typeof stripAccented).toEqual('function')
  })
})

describe('should return a string stripped of all accented characters', () => {

  it('should strip out é, è and ß', () => {
    let string = stripAccented('Hérmèn Chaße')
    expect(string).toEqual('Hermen Chasse')
  })

  it('should strip out ä, æ and ā', () => {
    let string = stripAccented('ä, æ and ā')
    expect(string).toEqual('a, ae and a')
  })

  it('should strip out î, í and ì', () => {
    let string = stripAccented('î, í and ì')
    expect(string).toEqual('i, i and i')
  })

  it('should strip out ÿ, ü and œ', () => {
    let string = stripAccented('ÿ, ü and œ')
    expect(string).toEqual('y, u and oe')
  })

  it('should strip out ø, ō and õ', () => {
    let string = stripAccented('ø, ō and õ')
    expect(string).toEqual('o, o and o')
  })

  it('should strip out ś, š and ž', () => {
    let string = stripAccented('ś, š and ž')
    expect(string).toEqual('s, s and z')
  })

  it('should strip out ç, ñ and ć', () => {
    let string = stripAccented('ç, ñ and ć')
    expect(string).toEqual('c, n and c')
  })

})
