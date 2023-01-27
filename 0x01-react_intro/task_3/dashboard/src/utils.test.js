import {getFooterCopy,  getFullYear,  getLatestNotification} from './utils'

test('getFullYear return the current year',()=>{
    expect(getFullYear()).toBe(2023)
});
test('return the Holberton School is true',()=>{
      expect(getFooterCopy(true)).toBe('Holberton School')
});

test('return the Holberton School main dashboard is false',()=>{
    expect(getFooterCopy(false)).toBe('Holberton School main dashoard')
});
test("returns string", () => {
    expect(typeof getLatestNotification()).toBe("string");
})
test("returns a specific string", () => {
    expect(getLatestNotification()()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})