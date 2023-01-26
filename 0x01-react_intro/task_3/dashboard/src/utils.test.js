import {getFullYear,getFooterCopy,getLatestNotification} from './utils.js'

test('getFullYear to equal 2023',()=>{
    expect(getFullYear()).toBe(2023)
});

test('return the Holberton',() =>{
    expect(getFooterCopy(true)).toBe('Holberton School')
});
test('return the Holberton School main dashboard',()=>{
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('return the string',()=>{
    expect(typeof getLatestNotification()).toBe(String)
});


test('return a given string',()=>{
    expect(getFooterCopy()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
})